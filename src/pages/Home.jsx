import React, { useEffect } from "react";
import { Log } from "../middleware/logger";

const Home = () => {
  useEffect(() => {
    const logPageLoad = async () => {
      try {
        await Log(
          "frontend",
          "info",
          "page",
          "Home page loaded"
        );
      } catch (error) {
        console.error("Failed to log page load:", error);
      }
    };

    logPageLoad();
  }, []);

  return (
    <div>
      <h2>Welcome to Frontend Logging System</h2>

      <div style={{ marginBottom: "30px", lineHeight: "1.6" }}>
        <p>
          This application demonstrates a comprehensive logging system built with React and Vite.
          Every action, navigation, API call, and state change is logged and sent to the evaluation service.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
        <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", border: "1px solid #ddd" }}>
          <h3>🔐 Authentication</h3>
          <p>Test login functionality with comprehensive logging of auth events.</p>
        </div>

        <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", border: "1px solid #ddd" }}>
          <h3>📝 Registration</h3>
          <p>User registration form with form validation and event logging.</p>
        </div>

        <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", border: "1px solid #ddd" }}>
          <h3>👥 User Management</h3>
          <p>Browse and interact with users while all actions are logged.</p>
        </div>

        <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", border: "1px solid #ddd" }}>
          <h3>📊 Dashboard</h3>
          <p>Interactive dashboard with state changes and theme management logging.</p>
        </div>

        <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", border: "1px solid #ddd" }}>
          <h3>🔗 API Integration</h3>
          <p>Real API calls to JSONPlaceholder with comprehensive logging.</p>
        </div>

        <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", border: "1px solid #ddd" }}>
          <h3>⚡ Custom Hooks</h3>
          <p>Custom React hooks with built-in logging for common patterns.</p>
        </div>
      </div>

      <div style={{ backgroundColor: "#e7f3ff", padding: "20px", borderRadius: "8px", border: "1px solid #b3d9ff" }}>
        <h3>📊 Logging Information</h3>
        <p><strong>API Endpoint:</strong> http://4.224.186.213/evaluation-service/logs</p>
        <p><strong>Log Format:</strong> JSON with stack, level, package, and message</p>
        <p><strong>Log Levels:</strong> debug, info, warn, error, fatal</p>
        <p><strong>Packages:</strong> api, component, hook, page, state, style, auth, config, middleware, utils</p>
      </div>

      <div style={{ marginTop: "30px", textAlign: "center", color: "#666", fontSize: "14px" }}>
        <p>Open Developer Console (F12) to see all logged events in real-time</p>
      </div>
    </div>
  );
};

export default Home;
