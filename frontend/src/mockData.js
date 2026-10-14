/**
 * MACHINE GAURD AI - High-Fidelity Industrial Dataset for Standby & Demo Mode
 * Used when running on serverless edge (e.g. Vercel) or when external backend is disconnected.
 */

export const DEMO_MACHINES = [
  {
    machine_id: "M14860",
    type: "M",
    location: "Machining Bay 1 — CNC Milling",
    status: "OPERATIONAL",
    health_score: 96.4,
    risk_level: "NOMINAL",
    failure_probability: 0.036,
    failure_type: "No Failure",
    air_temperature: 298.1,
    process_temperature: 308.6,
    rotational_speed: 1551,
    torque: 42.8,
    tool_wear: 122,
    created_at: new Date(Date.now() - 30 * 86400000).toISOString(),
  },
  {
    machine_id: "L47180",
    type: "L",
    location: "Assembly Cell 3 — Lathe Unit",
    status: "WARNING",
    health_score: 74.2,
    risk_level: "MODERATE",
    failure_probability: 0.258,
    failure_type: "Heat Dissipation",
    air_temperature: 299.8,
    process_temperature: 307.9,
    rotational_speed: 1408,
    torque: 54.2,
    tool_wear: 198,
    created_at: new Date(Date.now() - 45 * 86400000).toISOString(),
  },
  {
    machine_id: "H39880",
    type: "H",
    location: "Heavy Forming — Press Line 2",
    status: "CRITICAL",
    health_score: 41.5,
    risk_level: "CRITICAL",
    failure_probability: 0.585,
    failure_type: "Overstrain",
    air_temperature: 298.5,
    process_temperature: 309.2,
    rotational_speed: 1362,
    torque: 68.4,
    tool_wear: 218,
    created_at: new Date(Date.now() - 60 * 86400000).toISOString(),
  },
  {
    machine_id: "M14861",
    type: "M",
    location: "Machining Bay 2 — CNC Milling",
    status: "OPERATIONAL",
    health_score: 98.1,
    risk_level: "NOMINAL",
    failure_probability: 0.019,
    failure_type: "No Failure",
    air_temperature: 297.9,
    process_temperature: 308.2,
    rotational_speed: 1530,
    torque: 39.5,
    tool_wear: 65,
    created_at: new Date(Date.now() - 20 * 86400000).toISOString(),
  },
  {
    machine_id: "L47181",
    type: "L",
    location: "Assembly Cell 1 — Robotic Welder",
    status: "OPERATIONAL",
    health_score: 93.8,
    risk_level: "NOMINAL",
    failure_probability: 0.062,
    failure_type: "No Failure",
    air_temperature: 298.4,
    process_temperature: 308.8,
    rotational_speed: 1512,
    torque: 44.1,
    tool_wear: 140,
    created_at: new Date(Date.now() - 15 * 86400000).toISOString(),
  },
  {
    machine_id: "H39881",
    type: "H",
    location: "Stamping Bay 4 — Heavy Press",
    status: "WARNING",
    health_score: 68.9,
    risk_level: "HIGH",
    failure_probability: 0.311,
    failure_type: "Power Failure",
    air_temperature: 299.1,
    process_temperature: 310.4,
    rotational_speed: 1290,
    torque: 62.0,
    tool_wear: 185,
    created_at: new Date(Date.now() - 10 * 86400000).toISOString(),
  },
  {
    machine_id: "M14862",
    type: "M",
    location: "Finishing Section — Surface Grinder",
    status: "OPERATIONAL",
    health_score: 95.0,
    risk_level: "NOMINAL",
    failure_probability: 0.050,
    failure_type: "No Failure",
    air_temperature: 298.0,
    process_temperature: 308.5,
    rotational_speed: 1545,
    torque: 41.2,
    tool_wear: 95,
    created_at: new Date(Date.now() - 8 * 86400000).toISOString(),
  },
  {
    machine_id: "L47182",
    type: "L",
    location: "Packaging Section — Automated Sorter",
    status: "OPERATIONAL",
    health_score: 99.2,
    risk_level: "NOMINAL",
    failure_probability: 0.008,
    failure_type: "No Failure",
    air_temperature: 297.5,
    process_temperature: 307.8,
    rotational_speed: 1560,
    torque: 38.0,
    tool_wear: 40,
    created_at: new Date(Date.now() - 5 * 86400000).toISOString(),
  },
];

export const DEMO_ALERTS = [
  {
    alert_id: "ALT-9042",
    machine_id: "H39880",
    alert_type: "OVERSTRAIN_CRITICAL",
    severity: "CRITICAL",
    status: "OPEN",
    message: "Mechanical overstrain detected: Torque (68.4 Nm) x Tool Wear (218 min) exceeds structural safety margin.",
    created_at: new Date(Date.now() - 12 * 60000).toISOString(),
    metrics_snapshot: { torque_nm: 68.4, tool_wear_min: 218, rotational_speed_rpm: 1362 },
  },
  {
    alert_id: "ALT-9038",
    machine_id: "L47180",
    alert_type: "HEAT_DISSIPATION_WARNING",
    severity: "WARNING",
    status: "OPEN",
    message: "Thermal dissipation deficit: Difference between process and ambient temp is 8.1K (threshold < 8.6K).",
    created_at: new Date(Date.now() - 35 * 60000).toISOString(),
    metrics_snapshot: { air_temperature_k: 299.8, process_temperature_k: 307.9 },
  },
  {
    alert_id: "ALT-9029",
    machine_id: "H39881",
    alert_type: "POWER_ENVELOPE_ANOMALY",
    severity: "WARNING",
    status: "ACKNOWLEDGED",
    message: "Power load variance outside nominal bounds (Calculated power: 8,385 W).",
    created_at: new Date(Date.now() - 90 * 60000).toISOString(),
    metrics_snapshot: { mechanical_power_w: 8385, torque_nm: 62.0 },
  },
  {
    alert_id: "ALT-9014",
    machine_id: "L47180",
    alert_type: "TOOL_WEAR_WARNING",
    severity: "WARNING",
    status: "ACKNOWLEDGED",
    message: "Tool wear exceeded 190 minutes threshold. Inspection advised within 4 operational hours.",
    created_at: new Date(Date.now() - 150 * 60000).toISOString(),
    metrics_snapshot: { tool_wear_min: 198 },
  },
];

export const DEMO_TECHNICIANS = [
  { technician_id: "TECH-01", name: "Dhananjay Sharma", specialization: "Reliability & Vibration Specialist", active_orders: 1, phone: "+91 98765 43210" },
  { technician_id: "TECH-02", name: "Abhishek Upadhyay", specialization: "Mechanical Drive & Spindle Engineer", active_orders: 1, phone: "+91 98765 43211" },
  { technician_id: "TECH-03", name: "Anu Sharma", specialization: "Thermal Systems & Fluid Dynamics Lead", active_orders: 0, phone: "+91 98765 43212" },
  { technician_id: "TECH-04", name: "Rajesh Kumar", specialization: "Electrical & Inverter Diagnostics", active_orders: 0, phone: "+91 98765 43213" },
];

export const DEMO_RECENT_REPAIRS = [
  {
    work_order_id: "WO-501",
    machine_id: "M14860",
    technician_id: "TECH-01",
    technician: DEMO_TECHNICIANS[0],
    status: "COMPLETED",
    problem_description: "Spindle bearing vibration and excess heat dissipation deficit.",
    work_performed: "Flushed spindle bearing reservoir, replaced synthetic lubricant, rebalanced coupling.",
    total_cost: 12500,
    labour_cost: 4500,
    parts_cost: 8000,
    started_at: new Date(Date.now() - 48 * 3600000).toISOString(),
    completed_at: new Date(Date.now() - 45 * 3600000).toISOString(),
  },
  {
    work_order_id: "WO-502",
    machine_id: "L47180",
    technician_id: "TECH-02",
    technician: DEMO_TECHNICIANS[1],
    status: "COMPLETED",
    problem_description: "Carbide insert cutting tool wear exceeded 210 min threshold.",
    work_performed: "Indexed CNC cutting inserts, calibrated tool offset sensor, executed zero-point verification.",
    total_cost: 6800,
    labour_cost: 2800,
    parts_cost: 4000,
    started_at: new Date(Date.now() - 72 * 3600000).toISOString(),
    completed_at: new Date(Date.now() - 70 * 3600000).toISOString(),
  },
  {
    work_order_id: "WO-503",
    machine_id: "H39880",
    technician_id: "TECH-03",
    technician: DEMO_TECHNICIANS[2],
    status: "COMPLETED",
    problem_description: "Hydraulic pressure seal leakage causing torque delivery drop.",
    work_performed: "Replaced primary piston O-rings, bleeded air from manifold, pressurized to 210 bar.",
    total_cost: 24500,
    labour_cost: 8500,
    parts_cost: 16000,
    started_at: new Date(Date.now() - 96 * 3600000).toISOString(),
    completed_at: new Date(Date.now() - 91 * 3600000).toISOString(),
  },
];

export function getMockResponse(endpoint) {
  const cleanEndpoint = endpoint.split("?")[0].replace(/\/$/, "");

  // Health
  if (cleanEndpoint === "/api/health") {
    return {
      status: "healthy",
      app_name: "MACHINE GAURD AI",
      environment: "cloud-preview",
      version: "1.0.0",
      mode: "preview_demo",
      database: { status: "healthy", dialect: "sqlite", latency_ms: 0.8 },
      ml_models: { status: "healthy", model_loaded: true, preprocessor_loaded: true },
      kafka: { enabled: false, status: "standby" },
    };
  }

  // Machines Registry
  if (cleanEndpoint === "/api/machines") {
    return DEMO_MACHINES;
  }
  if (cleanEndpoint === "/api/machines/count") {
    return { count: DEMO_MACHINES.length };
  }
  if (cleanEndpoint === "/api/sensors/count") {
    return { count: 10000 };
  }

  // Single Machine Details
  if (cleanEndpoint.startsWith("/api/machines/")) {
    const parts = cleanEndpoint.split("/");
    const machineId = decodeURIComponent(parts[3] || "M14860");

    if (parts[4] === "sensor-history") {
      // 50 historical points
      const points = [];
      const now = Date.now();
      for (let i = 49; i >= 0; i--) {
        points.push({
          timestamp: new Date(now - i * 60000).toISOString(),
          air_temperature: +(298.1 + Math.sin(i * 0.2) * 1.2).toFixed(2),
          process_temperature: +(308.5 + Math.sin(i * 0.2) * 1.5).toFixed(2),
          rotational_speed: Math.round(1510 + Math.cos(i * 0.3) * 35),
          torque: +(42.0 + Math.sin(i * 0.25) * 3.5).toFixed(2),
          tool_wear: Math.min(240, 100 + i * 2),
        });
      }
      return points;
    }

    const found = DEMO_MACHINES.find((m) => m.machine_id === machineId) || DEMO_MACHINES[0];
    return {
      ...found,
      sensor_history: [],
      alerts: DEMO_ALERTS.filter((a) => a.machine_id === machineId),
      maintenance_records: DEMO_RECENT_REPAIRS.filter((r) => r.machine_id === machineId),
    };
  }

  // Alerts
  if (cleanEndpoint === "/api/alerts/summary") {
    return {
      total_alerts: 14,
      open_alerts: 4,
      acknowledged_alerts: 3,
      resolved_alerts: 7,
      critical_alerts: 1,
      warning_alerts: 3,
      by_failure_mode: {
        "Heat Dissipation": 4,
        "Power Failure": 3,
        "Overstrain": 4,
        "Tool Wear": 3,
      },
    };
  }
  if (cleanEndpoint === "/api/alerts/active" || cleanEndpoint === "/api/alerts") {
    return DEMO_ALERTS;
  }

  // Maintenance
  if (cleanEndpoint === "/api/maintenance/summary") {
    return {
      total_records: 48,
      pending_requests: 2,
      in_progress: 2,
      completed_repairs: 44,
      mean_time_to_repair_hours: 3.2,
      estimated_cost_total: 43800,
    };
  }
  if (cleanEndpoint === "/api/maintenance/requests") {
    return [
      {
        work_order_id: "WO-601",
        machine_id: "H39880",
        alert_id: "ALT-9042",
        status: "ACTIVE",
        technician_name: "Dhananjay Sharma",
        problem_description: "Overstrain prevention and spindle check.",
        estimated_cost: 14500,
        created_at: new Date(Date.now() - 20 * 60000).toISOString(),
      },
      {
        work_order_id: "WO-602",
        machine_id: "L47180",
        alert_id: "ALT-9038",
        status: "ACTIVE",
        technician_name: "Abhishek Upadhyay",
        problem_description: "Thermal sensor replacement & heat exchanger cleaning.",
        estimated_cost: 8200,
        created_at: new Date(Date.now() - 40 * 60000).toISOString(),
      },
    ];
  }
  if (cleanEndpoint === "/api/maintenance/recent-repairs") {
    return DEMO_RECENT_REPAIRS;
  }
  if (cleanEndpoint === "/api/maintenance/cost-analytics") {
    return {
      total_expenditure: 43800,
      average_repair_cost: 912,
      by_failure_mode: [
        { failure_mode: "Overstrain", total_cost: 16500, count: 6 },
        { failure_mode: "Heat Dissipation", total_cost: 11800, count: 5 },
        { failure_mode: "Tool Wear", total_cost: 9500, count: 8 },
        { failure_mode: "Power Failure", total_cost: 6000, count: 4 },
      ],
      monthly_trend: [
        { month: "May", cost: 6500 },
        { month: "Jun", cost: 7800 },
        { month: "Jul", cost: 7100 },
        { month: "Aug", cost: 9200 },
        { month: "Sep", cost: 6400 },
        { month: "Oct", cost: 6800 },
      ],
    };
  }
  if (cleanEndpoint === "/api/maintenance/dashboard") {
    return {
      unassigned: [
        { work_order_id: "WO-603", machine_id: "H39881", priority: "HIGH", estimated_cost: 9200 },
      ],
      assigned: [
        { work_order_id: "WO-601", machine_id: "H39880", technician_name: "Dhananjay Sharma", estimated_cost: 14500 },
      ],
      in_progress: [
        { work_order_id: "WO-602", machine_id: "L47180", technician_name: "Abhishek Upadhyay", estimated_cost: 8200 },
      ],
      completed: DEMO_RECENT_REPAIRS,
    };
  }
  if (cleanEndpoint === "/api/maintenance/queue") {
    return { queue: [] };
  }
  if (cleanEndpoint === "/api/technicians") {
    return DEMO_TECHNICIANS;
  }

  // Analytics
  if (cleanEndpoint === "/api/analytics/summary") {
    return {
      fleet_size: 10000,
      avg_health_score: 95.8,
      avg_air_temp_k: 300.0,
      avg_process_temp_k: 310.0,
      avg_rotational_speed_rpm: 1538,
      avg_torque_nm: 39.9,
      avg_tool_wear_min: 107.9,
      failure_rate_percentage: 3.39,
      failure_mode_breakdown: {
        "No Failure": 9661,
        "Heat Dissipation": 115,
        "Power Failure": 95,
        "Overstrain": 78,
        "Tool Wear": 45,
        "Random Failure": 6,
      },
    };
  }
  if (cleanEndpoint === "/api/analytics/machine-comparison") {
    return {
      comparison: DEMO_MACHINES.slice(0, 3).map((m) => ({
        machine_id: m.machine_id,
        health_score: m.health_score,
        risk_level: m.risk_level,
        air_temperature: m.air_temperature,
        process_temperature: m.process_temperature,
        rotational_speed: m.rotational_speed,
        torque: m.torque,
        tool_wear: m.tool_wear,
      })),
    };
  }
  if (cleanEndpoint === "/api/analytics/sensor-behavior") {
    return {
      correlations: {
        torque_vs_speed: -0.87,
        temp_vs_failure: 0.42,
        wear_vs_failure: 0.58,
      },
      distributions: {
        temperature_margin_k: { min: 6.8, q25: 9.8, median: 10.4, q75: 11.2, max: 13.5 },
      },
    };
  }
  if (cleanEndpoint === "/api/analytics/time-trends") {
    return {
      hourly_trends: Array.from({ length: 24 }, (_, i) => ({
        hour: `${i}:00`,
        avg_health: +(94.5 + Math.sin(i * 0.4) * 2.2).toFixed(1),
        failures_prevented: Math.round(1 + Math.sin(i * 0.5) * 1),
      })),
    };
  }
  if (cleanEndpoint === "/api/analytics/comprehensive") {
    return {
      operational_uptime_pct: 99.1,
      total_anomalies_detected: 842,
      preventative_actions_taken: 128,
      mean_risk_index: 12.4,
    };
  }

  // Budget Planner
  if (cleanEndpoint === "/api/budget-planner/summary") {
    return {
      available_budget: 300000.0,
      total_fleet_assets: 10000,
      high_risk_assets_count: 14,
      moderate_risk_assets_count: 38,
      nominal_assets_count: 9948,
      estimated_cost_all_high_risk: 18500.0,
      projected_roi_percentage: 245.5,
      scenarios: [
        {
          scenario_id: "repair_all_high_risk",
          title: "Immediate High-Risk Prevention",
          assets_targeted: 14,
          total_cost: 18500.0,
          risk_reduction_pct: 78.4,
          downtime_avoidance_hours: 120.0,
        },
        {
          scenario_id: "balanced_proactive",
          title: "Balanced Proactive Overhaul",
          assets_targeted: 32,
          total_cost: 44200.0,
          risk_reduction_pct: 92.1,
          downtime_avoidance_hours: 280.0,
        },
      ],
    };
  }
  if (cleanEndpoint.includes("/budget-planner/scenarios/")) {
    return [
      { machine_id: "H39880", risk_level: "CRITICAL", estimated_cost: 4500, failure_probability: 0.585 },
      { machine_id: "L47180", risk_level: "HIGH", estimated_cost: 3200, failure_probability: 0.311 },
      { machine_id: "H39881", risk_level: "HIGH", estimated_cost: 3800, failure_probability: 0.284 },
    ];
  }

  // Repeat Failure
  if (cleanEndpoint === "/api/repeat-failure/summary") {
    return {
      repeat_failure_assets_count: 3,
      ineffective_repairs_count: 2,
      recurrent_failure_rate_pct: 4.8,
      top_recurrent_assets: [
        { machine_id: "M14860", failure_mode: "Overstrain", repair_count: 3, last_repair_date: "2026-09-15" },
        { machine_id: "L47180", failure_mode: "Heat Dissipation", repair_count: 2, last_repair_date: "2026-09-18" },
      ],
    };
  }

  // Prediction API
  if (cleanEndpoint === "/api/predict") {
    return {
      machine_failure: 0,
      failure_probability: 0.038,
      failure_type: "No Failure",
      health_score: 96.2,
      risk_level: "NOMINAL",
      recommendations: ["NOMINAL: Machine operating within verified physical bounds."],
    };
  }

  return null;
}
