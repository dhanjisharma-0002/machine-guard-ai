import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an unhandled runtime error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="error-boundary-container"
          style={{
            minHeight: "360px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px 20px",
          }}
        >
          <div
            className="error-card"
            style={{
              maxWidth: "600px",
              width: "100%",
              background: "var(--bg-card, #111827)",
              border: "1px solid rgba(239, 68, 68, 0.35)",
              borderRadius: "12px",
              padding: "28px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
              color: "var(--text-primary, #f9fafb)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "8px",
                  background: "rgba(239, 68, 68, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                }}
              >
                ⚠️
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700 }}>
                  Telemetry Console Notice
                </h3>
                <span style={{ fontSize: "12px", color: "var(--text-muted, #9ca3af)" }}>
                  A component encountered a rendering interruption.
                </span>
              </div>
            </div>

            <p style={{ fontSize: "13px", lineHeight: "1.6", color: "var(--text-secondary, #d1d5db)", marginBottom: "20px" }}>
              The application encountered an unexpected condition:{" "}
              <code
                style={{
                  background: "rgba(0, 0, 0, 0.3)",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  fontFamily: "monospace",
                  color: "#f87171",
                }}
              >
                {this.state.error?.message || "Render exception"}
              </code>
              . Standby preview mode has preserved your session state.
            </p>

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                className="btn btn-primary"
                onClick={this.handleReset}
                style={{
                  padding: "8px 18px",
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                🔄 Retry Rendering
              </button>
              <button
                className="btn btn-secondary"
                onClick={this.handleReload}
                style={{
                  padding: "8px 18px",
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                Reload Console
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
