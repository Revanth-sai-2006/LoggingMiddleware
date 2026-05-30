/**
 * Reusable logging function for frontend
 * Sends logs to the evaluation service API
 */

const LOG_API = "http://4.224.186.213/evaluation-service/logs";

/**
 * Log function to send logs to the backend
 * @param {string} stack - Stack name (must be "frontend")
 * @param {string} level - Log level ("debug", "info", "warn", "error", "fatal")
 * @param {string} packageName - Package name (api, component, hook, page, state, style, auth, config, middleware, utils)
 * @param {string} message - Log message
 */
export const Log = async (stack, level, packageName, message) => {
  try {
    const response = await fetch(LOG_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message,
      }),
    });

    const data = await response.json();
    console.log("Log created:", data);
  } catch (error) {
    console.error("Logging failed:", error);
  }
};
