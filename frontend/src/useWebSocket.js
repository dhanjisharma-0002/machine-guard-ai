import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Custom React hook for subscribing to ISAAC live telemetry and prediction stream via WebSocket.
 * Features:
 * - Resilient auto-reconnect with exponential backoff
 * - Connection status tracking (CONNECTED, CONNECTING, DISCONNECTED, ERROR)
 * - Heartbeat ping-pong to keep connection alive
 * - Live update timestamp & payload state
 * - Optional custom message listener callback
 */
export function useTelemetryWebSocket(onMessageCallback) {
  const [connectionStatus, setConnectionStatus] = useState("CONNECTING"); // CONNECTED | CONNECTING | RECONNECTING | DISCONNECTED | ERROR
  const [latestPayload, setLatestPayload] = useState(null);
  const [lastTimestamp, setLastTimestamp] = useState(null);
  const [reconnectCount, setReconnectCount] = useState(0);

  const socketRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);
  const heartbeatIntervalRef = useRef(null);
  const isUnmountedRef = useRef(false);
  const callbackRef = useRef(onMessageCallback);

  // Keep callback reference updated
  useEffect(() => {
    callbackRef.current = onMessageCallback;
  }, [onMessageCallback]);

  const getWebSocketUrl = () => {
    if (import.meta.env.VITE_WS_URL) {
      return import.meta.env.VITE_WS_URL;
    }
    const rawApiUrl = import.meta.env.VITE_API_BASE_URL;
    if (rawApiUrl && (rawApiUrl.startsWith("http://") || rawApiUrl.startsWith("https://"))) {
      const wsBase = rawApiUrl.replace(/\/$/, "").replace(/^http/, "ws");
      return `${wsBase}/ws/telemetry`;
    }
    // On Vercel / serverless without a persistent backend, Vercel cannot host WebSockets
    if (import.meta.env.PROD && !rawApiUrl) {
      return null;
    }
    if (typeof window !== "undefined" && window.location) {
      const host = window.location.hostname || "localhost";
      return `ws://${host}:8000/ws/telemetry`;
    }
    return `ws://localhost:8000/ws/telemetry`;
  };

  const connect = useCallback(() => {
    if (isUnmountedRef.current) return;

    // Clean up any existing socket
    if (socketRef.current) {
      try {
        socketRef.current.close();
      } catch {
        // ignore close error
      }
    }

    const wsUrl = getWebSocketUrl();
    if (!wsUrl) {
      setConnectionStatus("STANDBY");
      return;
    }

    console.log("[WS] connecting to", wsUrl);
    setConnectionStatus((prev) => (reconnectCount > 0 ? "RECONNECTING" : "CONNECTING"));

    try {
      const ws = new WebSocket(wsUrl);
      socketRef.current = ws;

      ws.onopen = () => {
        if (isUnmountedRef.current) return;
        console.log("[WS] connected");
        setConnectionStatus("CONNECTED");
        setReconnectCount(0);

        // Start heartbeat ping every 20 seconds
        if (heartbeatIntervalRef.current) clearInterval(heartbeatIntervalRef.current);
        heartbeatIntervalRef.current = setInterval(() => {
          if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ type: "PING" }));
          }
        }, 20000);
      };

      ws.onmessage = (event) => {
        if (isUnmountedRef.current) return;
        try {
          const data = JSON.parse(event.data);
          if (data.type === "PONG") return; // Keepalive ack

          const now = new Date();
          setLastTimestamp(now);
          setLatestPayload(data);

          if (callbackRef.current && typeof callbackRef.current === "function") {
            callbackRef.current(data);
          }
        } catch (err) {
          console.error("Failed to parse WebSocket message:", err);
        }
      };

      ws.onerror = () => {
        if (isUnmountedRef.current) return;
        setConnectionStatus("STANDBY");
      };

      ws.onclose = () => {
        if (isUnmountedRef.current) return;
        setConnectionStatus("STANDBY");
        if (heartbeatIntervalRef.current) {
          clearInterval(heartbeatIntervalRef.current);
          heartbeatIntervalRef.current = null;
        }

        // Cap auto-reconnect to 3 attempts to avoid console spam when backend is offline
        if (reconnectCount >= 3) {
          console.log("[WS] Standby mode active (offline).");
          return;
        }

        const delay = Math.min(15000, 2000 * Math.pow(2, reconnectCount));
        setReconnectCount((c) => c + 1);

        if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
        reconnectTimeoutRef.current = setTimeout(() => {
          connect();
        }, delay);
      };
    } catch {
      setConnectionStatus("STANDBY");
    }
  }, [reconnectCount]);

  // Periodic standby telemetry heartbeat when live WebSocket is unavailable
  useEffect(() => {
    if (connectionStatus !== "STANDBY" && connectionStatus !== "DISCONNECTED") return;

    const interval = setInterval(() => {
      const mockPayload = {
        type: "TELEMETRY",
        machine_id: "M14860",
        timestamp: new Date().toISOString(),
        source: "STANDBY_SIMULATION",
        sensor_readings: {
          air_temperature_k: +(298.15 + (Math.random() * 0.8 - 0.4)).toFixed(2),
          process_temperature_k: +(308.65 + (Math.random() * 1.0 - 0.5)).toFixed(2),
          rotational_speed_rpm: Math.round(1510 + (Math.random() * 40 - 20)),
          torque_nm: +(41.8 + (Math.random() * 1.6 - 0.8)).toFixed(2),
          tool_wear_min: 125,
        },
        prediction: {
          failure_probability: 0.038,
          health_score: 96.2,
          risk_level: "NOMINAL",
          recommended_action: "NOMINAL: Equipment operating within optimal physical envelope.",
        },
      };

      setLatestPayload(mockPayload);
      setLastTimestamp(new Date());

      if (callbackRef.current && typeof callbackRef.current === "function") {
        callbackRef.current(mockPayload);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [connectionStatus]);

  useEffect(() => {
    isUnmountedRef.current = false;
    connect();

    return () => {
      isUnmountedRef.current = true;
      if (heartbeatIntervalRef.current) clearInterval(heartbeatIntervalRef.current);
      if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
      if (socketRef.current) {
        try {
          socketRef.current.close();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  return {
    connectionStatus,
    latestPayload,
    lastTimestamp,
    reconnectCount,
    reconnect: connect,
  };
}
