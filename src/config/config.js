import { Log } from "../middleware/logger";

/**
 * Configuration file with logging
 */

const config = {
  api: {
    baseUrl: "http://4.224.186.213/evaluation-service",
    logsEndpoint: "/logs",
    timeout: 5000,
  },
  app: {
    name: "Frontend Logging System",
    version: "0.0.1",
    environment: import.meta.env.MODE || "development",
  },
};

// Log configuration on load
Log(
  "frontend",
  "debug",
  "config",
  `App initialized - Environment: ${config.app.environment}`
);

export default config;
