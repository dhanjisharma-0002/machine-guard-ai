/**
 * MACHINE GAURD AI - High-Fidelity Industrial Dataset for Standby & Demo Mode
 * Used when running on serverless edge (e.g. Vercel) or when external backend is disconnected.
 */

export const DEMO_MACHINES = [
  {
    id: 1,
    machine_id: "M14860",
    type: "M",
    location: "Machining Bay 1 — CNC Milling",
    status: "OPERATIONAL",
    health_score: 96.4,
    current_health_score: 96.4,
    risk_level: "NOMINAL",
    current_risk_level: "NOMINAL",
    failure_probability: 0.036,
    current_failure_probability: 0.036,
    failure_type: "No Failure",
    sensor_readings_count: 50,
    maintenance_records_count: 2,
    air_temperature: 298.1,
    process_temperature: 308.6,
    rotational_speed: 1551,
    torque: 42.8,
    tool_wear: 122,
    created_at: new Date(Date.now() - 30 * 86400000).toISOString(),
    latest_sensor_reading: {
      udi: 14860,
      air_temperature_k: 298.1,
      process_temperature_k: 308.6,
      rotational_speed_rpm: 1551,
      torque_nm: 42.8,
      tool_wear_min: 122,
      temp_diff_k: 10.5,
      mechanical_power_w: 6950.2,
      recorded_at: new Date().toISOString(),
    },
  },
  {
    id: 2,
    machine_id: "L47180",
    type: "L",
    location: "Assembly Cell 3 — Lathe Unit",
    status: "WARNING",
    health_score: 74.2,
    current_health_score: 74.2,
    risk_level: "MODERATE",
    current_risk_level: "MODERATE",
    failure_probability: 0.258,
    current_failure_probability: 0.258,
    failure_type: "Heat Dissipation",
    sensor_readings_count: 50,
    maintenance_records_count: 3,
    air_temperature: 299.8,
    process_temperature: 307.9,
    rotational_speed: 1408,
    torque: 54.2,
    tool_wear: 198,
    created_at: new Date(Date.now() - 45 * 86400000).toISOString(),
    latest_sensor_reading: {
      udi: 47180,
      air_temperature_k: 299.8,
      process_temperature_k: 307.9,
      rotational_speed_rpm: 1408,
      torque_nm: 54.2,
      tool_wear_min: 198,
      temp_diff_k: 8.1,
      mechanical_power_w: 7990.5,
      recorded_at: new Date().toISOString(),
    },
  },
  {
    id: 3,
    machine_id: "H39880",
    type: "H",
    location: "Heavy Forming — Press Line 2",
    status: "CRITICAL",
    health_score: 41.5,
    current_health_score: 41.5,
    risk_level: "CRITICAL",
    current_risk_level: "CRITICAL",
    failure_probability: 0.585,
    current_failure_probability: 0.585,
    failure_type: "Overstrain",
    sensor_readings_count: 50,
    maintenance_records_count: 4,
    air_temperature: 298.5,
    process_temperature: 309.2,
    rotational_speed: 1362,
    torque: 68.4,
    tool_wear: 218,
    created_at: new Date(Date.now() - 60 * 86400000).toISOString(),
    latest_sensor_reading: {
      udi: 39880,
      air_temperature_k: 298.5,
      process_temperature_k: 309.2,
      rotational_speed_rpm: 1362,
      torque_nm: 68.4,
      tool_wear_min: 218,
      temp_diff_k: 10.7,
      mechanical_power_w: 9755.0,
      recorded_at: new Date().toISOString(),
    },
  },
  {
    id: 4,
    machine_id: "M14861",
    type: "M",
    location: "Machining Bay 2 — CNC Milling",
    status: "OPERATIONAL",
    health_score: 98.1,
    current_health_score: 98.1,
    risk_level: "NOMINAL",
    current_risk_level: "NOMINAL",
    failure_probability: 0.019,
    current_failure_probability: 0.019,
    failure_type: "No Failure",
    sensor_readings_count: 50,
    maintenance_records_count: 1,
    air_temperature: 297.9,
    process_temperature: 308.2,
    rotational_speed: 1530,
    torque: 39.5,
    tool_wear: 65,
    created_at: new Date(Date.now() - 20 * 86400000).toISOString(),
    latest_sensor_reading: {
      udi: 14861,
      air_temperature_k: 297.9,
      process_temperature_k: 308.2,
      rotational_speed_rpm: 1530,
      torque_nm: 39.5,
      tool_wear_min: 65,
      temp_diff_k: 10.3,
      mechanical_power_w: 6325.0,
      recorded_at: new Date().toISOString(),
    },
  },
  {
    id: 5,
    machine_id: "L47181",
    type: "L",
    location: "Assembly Cell 1 — Robotic Welder",
    status: "OPERATIONAL",
    health_score: 93.8,
    current_health_score: 93.8,
    risk_level: "NOMINAL",
    current_risk_level: "NOMINAL",
    failure_probability: 0.062,
    current_failure_probability: 0.062,
    failure_type: "No Failure",
    sensor_readings_count: 50,
    maintenance_records_count: 1,
    air_temperature: 298.4,
    process_temperature: 308.8,
    rotational_speed: 1512,
    torque: 44.1,
    tool_wear: 140,
    created_at: new Date(Date.now() - 15 * 86400000).toISOString(),
    latest_sensor_reading: {
      udi: 47181,
      air_temperature_k: 298.4,
      process_temperature_k: 308.8,
      rotational_speed_rpm: 1512,
      torque_nm: 44.1,
      tool_wear_min: 140,
      temp_diff_k: 10.4,
      mechanical_power_w: 6980.0,
      recorded_at: new Date().toISOString(),
    },
  },
  {
    id: 6,
    machine_id: "H39881",
    type: "H",
    location: "Stamping Bay 4 — Heavy Press",
    status: "WARNING",
    health_score: 68.9,
    current_health_score: 68.9,
    risk_level: "HIGH",
    current_risk_level: "HIGH",
    failure_probability: 0.311,
    current_failure_probability: 0.311,
    failure_type: "Power Failure",
    sensor_readings_count: 50,
    maintenance_records_count: 2,
    air_temperature: 299.1,
    process_temperature: 310.4,
    rotational_speed: 1290,
    torque: 62.0,
    tool_wear: 185,
    created_at: new Date(Date.now() - 10 * 86400000).toISOString(),
    latest_sensor_reading: {
      udi: 39881,
      air_temperature_k: 299.1,
      process_temperature_k: 310.4,
      rotational_speed_rpm: 1290,
      torque_nm: 62.0,
      tool_wear_min: 185,
      temp_diff_k: 11.3,
      mechanical_power_w: 8375.0,
      recorded_at: new Date().toISOString(),
    },
  },
  {
    id: 7,
    machine_id: "M14862",
    type: "M",
    location: "Finishing Section — Surface Grinder",
    status: "OPERATIONAL",
    health_score: 95.0,
    current_health_score: 95.0,
    risk_level: "NOMINAL",
    current_risk_level: "NOMINAL",
    failure_probability: 0.050,
    current_failure_probability: 0.050,
    failure_type: "No Failure",
    sensor_readings_count: 50,
    maintenance_records_count: 1,
    air_temperature: 298.0,
    process_temperature: 308.5,
    rotational_speed: 1545,
    torque: 41.2,
    tool_wear: 95,
    created_at: new Date(Date.now() - 8 * 86400000).toISOString(),
    latest_sensor_reading: {
      udi: 14862,
      air_temperature_k: 298.0,
      process_temperature_k: 308.5,
      rotational_speed_rpm: 1545,
      torque_nm: 41.2,
      tool_wear_min: 95,
      temp_diff_k: 10.5,
      mechanical_power_w: 6665.0,
      recorded_at: new Date().toISOString(),
    },
  },
  {
    id: 8,
    machine_id: "L47182",
    type: "L",
    location: "Packaging Section — Automated Sorter",
    status: "OPERATIONAL",
    health_score: 99.2,
    current_health_score: 99.2,
    risk_level: "NOMINAL",
    current_risk_level: "NOMINAL",
    failure_probability: 0.008,
    current_failure_probability: 0.008,
    failure_type: "No Failure",
    sensor_readings_count: 50,
    maintenance_records_count: 0,
    air_temperature: 297.5,
    process_temperature: 307.8,
    rotational_speed: 1560,
    torque: 38.0,
    tool_wear: 40,
    created_at: new Date(Date.now() - 5 * 86400000).toISOString(),
    latest_sensor_reading: {
      udi: 47182,
      air_temperature_k: 297.5,
      process_temperature_k: 307.8,
      rotational_speed_rpm: 1560,
      torque_nm: 38.0,
      tool_wear_min: 40,
      temp_diff_k: 10.3,
      mechanical_power_w: 6205.0,
      recorded_at: new Date().toISOString(),
    },
  },
];

export const DEMO_ALERTS = [
  {
    id: 1,
    alert_id: "ALT-9042",
    machine_id: "H39880",
    alert_type: "OVERSTRAIN_CRITICAL",
    type: "OVERSTRAIN_CRITICAL",
    severity: "CRITICAL",
    status: "OPEN",
    message: "Mechanical overstrain detected: Torque (68.4 Nm) x Tool Wear (218 min) exceeds structural safety margin.",
    created_at: new Date(Date.now() - 12 * 60000).toISOString(),
    timestamp: new Date(Date.now() - 12 * 60000).toISOString(),
    metrics_snapshot: { torque_nm: 68.4, tool_wear_min: 218, rotational_speed_rpm: 1362 },
  },
  {
    id: 2,
    alert_id: "ALT-9038",
    machine_id: "L47180",
    alert_type: "HEAT_DISSIPATION_WARNING",
    type: "HEAT_DISSIPATION_WARNING",
    severity: "WARNING",
    status: "OPEN",
    message: "Thermal dissipation deficit: Difference between process and ambient temp is 8.1K (threshold < 8.6K).",
    created_at: new Date(Date.now() - 35 * 60000).toISOString(),
    timestamp: new Date(Date.now() - 35 * 60000).toISOString(),
    metrics_snapshot: { air_temperature_k: 299.8, process_temperature_k: 307.9 },
  },
  {
    id: 3,
    alert_id: "ALT-9029",
    machine_id: "H39881",
    alert_type: "POWER_ENVELOPE_ANOMALY",
    type: "POWER_ENVELOPE_ANOMALY",
    severity: "WARNING",
    status: "ACKNOWLEDGED",
    message: "Power load variance outside nominal bounds (Calculated power: 8,385 W).",
    created_at: new Date(Date.now() - 90 * 60000).toISOString(),
    timestamp: new Date(Date.now() - 90 * 60000).toISOString(),
    metrics_snapshot: { mechanical_power_w: 8385, torque_nm: 62.0 },
  },
  {
    id: 4,
    alert_id: "ALT-9014",
    machine_id: "L47180",
    alert_type: "TOOL_WEAR_WARNING",
    type: "TOOL_WEAR_WARNING",
    severity: "WARNING",
    status: "ACKNOWLEDGED",
    message: "Tool wear exceeded 190 minutes threshold. Inspection advised within 4 operational hours.",
    created_at: new Date(Date.now() - 150 * 60000).toISOString(),
    timestamp: new Date(Date.now() - 150 * 60000).toISOString(),
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
    id: 501,
    request_id: "WO-501",
    work_order_id: "WO-501",
    machine_id: "M14860",
    machine_type: "M",
    technician_id: "TECH-01",
    technician: DEMO_TECHNICIANS[0],
    assigned_by: "Operations Lead",
    issue: "Spindle bearing vibration and excess heat dissipation deficit.",
    diagnosis: "Micro-pitting on roller element bearings; lubricant starvation under cycle load.",
    problem_description: "Spindle bearing vibration and excess heat dissipation deficit.",
    work_performed: "Flushed spindle bearing reservoir, replaced synthetic lubricant, rebalanced coupling.",
    total_cost: 12500,
    labour_cost: 4500,
    parts_cost: 8000,
    other_cost: 0,
    duration_minutes: 180,
    status: "COMPLETED",
    repair_started_at: new Date(Date.now() - 48 * 3600000).toISOString(),
    repair_completed_at: new Date(Date.now() - 45 * 3600000).toISOString(),
    completed_at: new Date(Date.now() - 45 * 3600000).toISOString(),
  },
  {
    id: 502,
    request_id: "WO-502",
    work_order_id: "WO-502",
    machine_id: "L47180",
    machine_type: "L",
    technician_id: "TECH-02",
    technician: DEMO_TECHNICIANS[1],
    assigned_by: "Reliability Lead",
    issue: "Carbide insert cutting tool wear exceeded 210 min threshold.",
    diagnosis: "Flank wear on cutting edges approaching critical fracture boundary.",
    problem_description: "Carbide insert cutting tool wear exceeded 210 min threshold.",
    work_performed: "Indexed CNC cutting inserts, calibrated tool offset sensor, executed zero-point verification.",
    total_cost: 6800,
    labour_cost: 2800,
    parts_cost: 4000,
    other_cost: 0,
    duration_minutes: 120,
    status: "COMPLETED",
    repair_started_at: new Date(Date.now() - 72 * 3600000).toISOString(),
    repair_completed_at: new Date(Date.now() - 70 * 3600000).toISOString(),
    completed_at: new Date(Date.now() - 70 * 3600000).toISOString(),
  },
  {
    id: 503,
    request_id: "WO-503",
    work_order_id: "WO-503",
    machine_id: "H39880",
    machine_type: "H",
    technician_id: "TECH-03",
    technician: DEMO_TECHNICIANS[2],
    assigned_by: "Plant Operator",
    issue: "Hydraulic pressure seal leakage causing torque delivery drop.",
    diagnosis: "Polyurethane seal degradation from elevated continuous oil temperature.",
    problem_description: "Hydraulic pressure seal leakage causing torque delivery drop.",
    work_performed: "Replaced primary piston O-rings, bleeded air from manifold, pressurized to 210 bar.",
    total_cost: 24500,
    labour_cost: 8500,
    parts_cost: 16000,
    other_cost: 0,
    duration_minutes: 300,
    status: "COMPLETED",
    repair_started_at: new Date(Date.now() - 96 * 3600000).toISOString(),
    repair_completed_at: new Date(Date.now() - 91 * 3600000).toISOString(),
    completed_at: new Date(Date.now() - 91 * 3600000).toISOString(),
  },
];

export function getMockResponse(endpoint) {
  const cleanEndpoint = endpoint.split("?")[0].replace(/\/$/, "");

  // Health
  if (cleanEndpoint === "/api/health" || cleanEndpoint === "/health") {
    return {
      status: "ok",
      service: "MACHINE GAURD AI",
      app_name: "MACHINE GAURD AI",
      environment: "cloud-preview",
      version: "1.0.0",
      mode: "preview_demo",
      database: { status: "ok", message: "SQLite in-memory preview operational" },
      ml_models: { status: "healthy", model_loaded: true, preprocessor_loaded: true },
      kafka: { enabled: false, status: "standby" },
    };
  }

  // Machines Registry
  if (cleanEndpoint === "/api/machines") {
    return DEMO_MACHINES;
  }
  if (cleanEndpoint === "/api/machines/count") {
    return { count: DEMO_MACHINES.length, entity: "machines" };
  }
  if (cleanEndpoint === "/api/sensors/count") {
    return { count: 10000, entity: "sensors" };
  }

  // Single Machine Details & Sensor History
  if (cleanEndpoint.startsWith("/api/machines/")) {
    const parts = cleanEndpoint.split("/");
    const machineId = decodeURIComponent(parts[3] || "M14860");

    if (parts[4] === "sensor-history") {
      const points = [];
      const now = Date.now();
      for (let i = 24; i >= 0; i--) {
        const air = +(298.1 + Math.sin(i * 0.25) * 1.2).toFixed(2);
        const proc = +(308.5 + Math.sin(i * 0.25) * 1.5).toFixed(2);
        const spd = Math.round(1510 + Math.cos(i * 0.3) * 35);
        const trq = +(42.0 + Math.sin(i * 0.25) * 3.5).toFixed(2);
        const wear = Math.min(240, 100 + i * 2);
        const ts = new Date(now - i * 60000).toISOString();

        points.push({
          air_temperature_k: air,
          process_temperature_k: proc,
          rotational_speed_rpm: spd,
          torque_nm: trq,
          tool_wear_min: wear,
          temp_diff_k: +(proc - air).toFixed(2),
          mechanical_power_w: +(trq * ((spd * 2 * Math.PI) / 60)).toFixed(1),
          recorded_at: ts,
          timestamp: ts,
        });
      }
      return {
        machine_id: machineId,
        total_records: points.length,
        count: points.length,
        limit: 50,
        offset: 0,
        data: points,
      };
    }

    if (parts[4] === "maintenance-history") {
      const records = DEMO_RECENT_REPAIRS.filter((r) => r.machine_id === machineId);
      return {
        machine_id: machineId,
        total_records: records.length,
        limit: 50,
        offset: 0,
        data: records,
      };
    }

    const found = DEMO_MACHINES.find((m) => m.machine_id === machineId) || DEMO_MACHINES[0];
    return {
      ...found,
      sensor_history: [],
      alerts: DEMO_ALERTS.filter((a) => a.machine_id === machineId),
      maintenance_records: DEMO_RECENT_REPAIRS.filter((r) => r.machine_id === machineId),
      workflow_history: [],
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
      info_alerts: 0,
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
      completed_count: 44,
      active_repairs_count: 2,
      pending_count: 2,
      total_maintenance_cost: 43800,
      total_labour_cost: 15800,
      total_parts_cost: 28000,
      total_other_cost: 0,
      average_repair_cost: 14600,
      mean_time_to_repair_hours: 3.2,
      estimated_cost_total: 43800,
    };
  }
  if (cleanEndpoint === "/api/maintenance/requests") {
    return [
      {
        id: 601,
        request_id: "WO-601",
        work_order_id: "WO-601",
        machine_id: "H39880",
        machine_type: "H",
        alert_id: "ALT-9042",
        status: "ACTIVE",
        technician_name: "Dhananjay Sharma",
        technician: DEMO_TECHNICIANS[0],
        problem_description: "Overstrain prevention and spindle check.",
        issue: "Overstrain prevention and spindle check.",
        estimated_cost: 14500,
        total_cost: 14500,
        labour_cost: 5500,
        parts_cost: 9000,
        other_cost: 0,
        created_at: new Date(Date.now() - 20 * 60000).toISOString(),
        repair_started_at: new Date(Date.now() - 20 * 60000).toISOString(),
      },
      {
        id: 602,
        request_id: "WO-602",
        work_order_id: "WO-602",
        machine_id: "L47180",
        machine_type: "L",
        alert_id: "ALT-9038",
        status: "ACTIVE",
        technician_name: "Abhishek Upadhyay",
        technician: DEMO_TECHNICIANS[1],
        problem_description: "Thermal sensor replacement & heat exchanger cleaning.",
        issue: "Thermal sensor replacement & heat exchanger cleaning.",
        estimated_cost: 8200,
        total_cost: 8200,
        labour_cost: 3200,
        parts_cost: 5000,
        other_cost: 0,
        created_at: new Date(Date.now() - 40 * 60000).toISOString(),
        repair_started_at: new Date(Date.now() - 40 * 60000).toISOString(),
      },
    ];
  }
  if (cleanEndpoint === "/api/maintenance/recent-repairs") {
    return DEMO_RECENT_REPAIRS;
  }
  if (cleanEndpoint === "/api/maintenance/cost-analytics") {
    return {
      total_repairs: 3,
      total_maintenance_cost: 43800,
      total_labour_cost: 15800,
      total_parts_cost: 28000,
      total_other_cost: 0,
      average_repair_cost: 14600,
      by_failure_mode: [
        { failure_mode: "Overstrain", total_cost: 24500, count: 1 },
        { failure_mode: "Heat Dissipation", total_cost: 12500, count: 1 },
        { failure_mode: "Tool Wear", total_cost: 6800, count: 1 },
      ],
      cost_by_machine_type: [
        { machine_type: "H", repair_count: 1, total_cost: 24500, labour_cost: 8500, parts_cost: 16000, other_cost: 0 },
        { machine_type: "M", repair_count: 1, total_cost: 12500, labour_cost: 4500, parts_cost: 8000, other_cost: 0 },
        { machine_type: "L", repair_count: 1, total_cost: 6800, labour_cost: 2800, parts_cost: 4000, other_cost: 0 },
      ],
    };
  }
  if (cleanEndpoint === "/api/maintenance/dashboard") {
    return {
      summary: {
        total_repairs: 3,
        total_maintenance_cost: 43800,
        total_labour_cost: 15800,
        total_parts_cost: 28000,
        total_other_cost: 0,
        average_repair_cost: 14600,
        active_repairs_count: 2,
        pending_count: 2,
        completed_count: 44,
      },
      due: [
        {
          recommendation_id: "REC-101",
          machine_id: "H39880",
          machine_type: "H",
          issue: "Mechanical Overstrain",
          risk: "CRITICAL",
          failure_probability: 0.585,
          health_score: 41.5,
          recommendation: "Inspect hydraulic pressure seals and torque limiter immediately.",
          suggested_action: "Schedule emergency hydraulic overhaul",
          priority: "CRITICAL",
          status: "DUE",
          due_status: "IMMEDIATE",
        },
      ],
      pending: [
        {
          id: 603,
          work_order_id: "WO-603",
          machine_id: "H39881",
          issue: "Power overload variance",
          priority: "HIGH",
          status: "PENDING",
          estimated_cost: 9200,
          created_at: new Date(Date.now() - 3600000).toISOString(),
        },
      ],
      assigned: [
        {
          id: 601,
          work_order_id: "WO-601",
          machine_id: "H39880",
          issue: "Overstrain prevention",
          technician_name: "Dhananjay Sharma",
          status: "ASSIGNED",
          estimated_cost: 14500,
        },
      ],
      in_progress: [
        {
          id: 602,
          work_order_id: "WO-602",
          machine_id: "L47180",
          issue: "Thermal sensor replacement",
          technician_name: "Abhishek Upadhyay",
          status: "IN_PROGRESS",
          estimated_cost: 8200,
        },
      ],
      completed: DEMO_RECENT_REPAIRS,
      technicians: DEMO_TECHNICIANS,
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
      total_machines: 10000,
      fleet_size: 10000,
      avg_health_score: 95.8,
      mean_fleet_health: 95.8,
      avg_air_temp_k: 300.0,
      avg_process_temp_k: 310.0,
      avg_rotational_speed_rpm: 1538,
      avg_torque_nm: 39.9,
      avg_tool_wear_min: 107.9,
      failure_rate_percent: 3.39,
      failure_rate_percentage: 3.39,
      total_alerts_count: 14,
      operational_machines: 9661,
      warning_machines: 261,
      critical_machines: 78,
      machines_by_type: { L: 6000, M: 3000, H: 1000 },
      failures_by_type: { TWF: 45, HDF: 115, PWF: 95, OSF: 78, RNF: 6 },
      failure_mode_breakdown: {
        "No Failure": 9661,
        "Heat Dissipation": 115,
        "Power Failure": 95,
        "Overstrain": 78,
        "Tool Wear": 45,
        "Random Failure": 6,
      },
      average_sensor_metrics: {
        air_temperature_k: 300.0,
        process_temperature_k: 310.0,
        rotational_speed_rpm: 1538,
        torque_nm: 39.9,
        tool_wear_min: 107.9,
      },
    };
  }
  if (cleanEndpoint === "/api/analytics/operational-summary") {
    return {
      fleet_size: 10000,
      active_sensors: 50000,
      operational_uptime_pct: 99.4,
      mean_time_between_failures_hours: 480.0,
      mean_time_to_repair_hours: 3.2,
      preventative_maintenance_compliance_pct: 94.6,
    };
  }
  if (cleanEndpoint === "/api/analytics/comprehensive") {
    return {
      operational_summary: {
        fleet_size: 10000,
        active_sensors: 50000,
        operational_uptime_pct: 99.4,
        mean_time_between_failures_hours: 480.0,
        mean_time_to_repair_hours: 3.2,
        preventative_maintenance_compliance_pct: 94.6,
      },
      machine_failures: [
        { machine_id: "H39880", machine_type: "H", failure_count: 3, failure_rate_pct: 6.0, mtbf_hours: 120.0, health_score: 41.5 },
        { machine_id: "L47180", machine_type: "L", failure_count: 2, failure_rate_pct: 4.0, mtbf_hours: 210.0, health_score: 74.2 },
        { machine_id: "H39881", machine_type: "H", failure_count: 2, failure_rate_pct: 4.0, mtbf_hours: 240.0, health_score: 68.9 },
        { machine_id: "M14860", machine_type: "M", failure_count: 1, failure_rate_pct: 2.0, mtbf_hours: 480.0, health_score: 96.4 },
      ],
      maintenance_frequency: {
        by_status: { PENDING: 2, IN_PROGRESS: 2, COMPLETED: 44, CANCELLED: 1 },
      },
      risk_distribution: {
        nominal: 9661,
        moderate: 200,
        high: 61,
        critical: 78,
      },
      failure_types: {
        by_failure_type: { TWF: 45, HDF: 115, PWF: 95, OSF: 78, RNF: 6 },
        by_machine_type: { L: 125, M: 88, H: 126 },
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
      points: Array.from({ length: 24 }, (_, i) => ({
        period: `${i}:00`,
        avg_risk_score: +(0.15 + Math.sin(i * 0.4) * 0.08).toFixed(2),
        failure_count: Math.round(Math.max(0, Math.sin(i * 0.5) * 2)),
        anomaly_ratio: +(0.03 + Math.cos(i * 0.3) * 0.02).toFixed(2),
      })),
    };
  }

  // Budget Planner
  if (cleanEndpoint === "/api/budget-planner/summary") {
    return {
      available_budget: 300000.0,
      total_fleet_assets: 10000,
      high_risk_count: 3,
      critical_count: 1,
      high_risk_assets_count: 3,
      moderate_risk_assets_count: 8,
      nominal_assets_count: 9989,
      estimated_cost_all_high_risk: 21500.0,
      projected_roi_percentage: 245.5,
      scenarios: [
        {
          scenario_id: "repair_all_high_risk",
          code: "SCENARIO_A",
          title: "Repair all high-risk assets",
          subtitle: "Comprehensive proactive overhaul for fleet maximum reliability",
          estimated_cost: 21500.0,
          downtime_avoided_hours: 120.0,
          assets_affected_count: 3,
          budget_utilization_pct: 7.2,
          failure_exposure: 0.0,
          budget_status: "Within Budget",
          affected_machine_ids: ["H39880", "L47180", "H39881"],
        },
        {
          scenario_id: "repair_top_critical",
          code: "SCENARIO_B",
          title: "Repair only top 3 critical assets",
          subtitle: "Targeted triage for core production line assets",
          estimated_cost: 11500.0,
          downtime_avoided_hours: 75.0,
          assets_affected_count: 2,
          budget_utilization_pct: 3.8,
          failure_exposure: 45000.0,
          budget_status: "Within Budget",
          affected_machine_ids: ["H39880", "L47180"],
        },
        {
          scenario_id: "delay_maintenance_30_days",
          code: "SCENARIO_C",
          title: "Delay maintenance by 30 days",
          subtitle: "Run-to-breakdown deferral with high contingency risk",
          estimated_cost: 0.0,
          downtime_avoided_hours: 0.0,
          assets_affected_count: 3,
          budget_utilization_pct: 0.0,
          failure_exposure: 185000.0,
          budget_status: "High Exposure",
          affected_machine_ids: ["H39880", "L47180", "H39881"],
        },
      ],
      comparison: [
        {
          scenario_id: "repair_all_high_risk",
          strategy: "A: All High-Risk",
          estimated_cost: 21500.0,
          downtime_avoided: "120 hrs",
          failure_exposure: 0.0,
          assets_covered: "3 machines",
          budget_utilization: "7.2%",
          budget_utilization_raw: 7.2,
          status: "Optimal",
        },
        {
          scenario_id: "repair_top_critical",
          strategy: "B: Top Critical",
          estimated_cost: 11500.0,
          downtime_avoided: "75 hrs",
          failure_exposure: 45000.0,
          assets_covered: "2 machines",
          budget_utilization: "3.8%",
          budget_utilization_raw: 3.8,
          status: "Acceptable",
        },
        {
          scenario_id: "delay_maintenance_30_days",
          strategy: "C: Delay 30d",
          estimated_cost: 0.0,
          downtime_avoided: "0 hrs",
          failure_exposure: 185000.0,
          assets_covered: "0 machines",
          budget_utilization: "0%",
          budget_utilization_raw: 0,
          status: "High Risk",
        },
      ],
    };
  }
  if (cleanEndpoint.includes("/budget-planner/scenarios")) {
    return [
      {
        machine_id: "H39880",
        machine_type: "H",
        risk_level: "CRITICAL",
        failure_probability: 0.585,
        health_score: 41.5,
        estimated_repair_cost: 4500,
        expected_downtime_hours: 24,
        recommended_action: "Perform hydraulic seal overhaul & recalibrate spindle load torque",
        is_repeat_failure: true,
      },
      {
        machine_id: "L47180",
        machine_type: "L",
        risk_level: "HIGH",
        failure_probability: 0.311,
        health_score: 74.2,
        estimated_repair_cost: 3200,
        expected_downtime_hours: 14,
        recommended_action: "Flush coolant radiator and replace thermo-sensitive sensor",
        is_repeat_failure: true,
      },
      {
        machine_id: "H39881",
        machine_type: "H",
        risk_level: "HIGH",
        failure_probability: 0.284,
        health_score: 68.9,
        estimated_repair_cost: 3800,
        expected_downtime_hours: 16,
        recommended_action: "Clean power inverter heat sink & test thyristor bank",
        is_repeat_failure: false,
      },
    ];
  }

  // Repeat Failure
  if (cleanEndpoint === "/api/repeat-failure/summary") {
    return {
      machines_with_repeated_failures: 2,
      machines_repaired_multiple_times: 3,
      potential_ineffective_repairs: 1,
      repeat_failure_alerts: 2,
      repeat_failure_assets_count: 3,
      ineffective_repairs_count: 2,
      recurrent_failure_rate_pct: 4.8,
      assets: [
        {
          machine_id: "H39880",
          machine_type: "H",
          failure_count: 3,
          repair_count: 2,
          last_repair: new Date(Date.now() - 4 * 86400000).toISOString(),
          next_failure: new Date(Date.now() - 1 * 86400000).toISOString(),
          days_after_repair: 3.0,
          current_risk: "CRITICAL",
          pattern: "Potential ineffective repair — review recommended",
        },
        {
          machine_id: "L47180",
          machine_type: "L",
          failure_count: 2,
          repair_count: 2,
          last_repair: new Date(Date.now() - 8 * 86400000).toISOString(),
          next_failure: new Date(Date.now() - 2 * 86400000).toISOString(),
          days_after_repair: 6.0,
          current_risk: "HIGH",
          pattern: "Rapid recurrence",
        },
      ],
      trend_data: [
        { period: "2026-05", repeat_count: 2 },
        { period: "2026-06", repeat_count: 4 },
        { period: "2026-07", repeat_count: 3 },
        { period: "2026-08", repeat_count: 5 },
        { period: "2026-09", repeat_count: 2 },
        { period: "2026-10", repeat_count: 3 },
      ],
      pattern_distribution: [
        { pattern: "Potential ineffective repair", count: 2, color: "#ef4444" },
        { pattern: "Rapid recurrence", count: 3, color: "#f59e0b" },
        { pattern: "Repeated failure", count: 4, color: "#8b5cf6" },
      ],
      top_recurrent_assets: [
        { machine_id: "H39880", failure_mode: "Overstrain", repair_count: 3, last_repair_date: "2026-10-10" },
        { machine_id: "L47180", failure_mode: "Heat Dissipation", repair_count: 2, last_repair_date: "2026-10-06" },
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

  // Generic Workflow Actions
  if (cleanEndpoint.includes("/workflow/")) {
    return {
      success: true,
      message: "Action recorded successfully.",
      timestamp: new Date().toISOString(),
    };
  }

  return null;
}
