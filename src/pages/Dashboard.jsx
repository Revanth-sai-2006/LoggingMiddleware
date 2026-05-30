import React, { useState } from "react";
import { Log } from "../middleware/logger";

/**
 * Dashboard Component that showcases various logging scenarios
 */
const Dashboard = () => {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState([]);

  const handleThemeChange = async (newTheme) => {
    try {
      await Log(
        "frontend",
        "info",
        "page",
        `Theme changed from ${theme} to ${newTheme}`
      );
      setTheme(newTheme);

      const notif = `Theme switched to ${newTheme} mode`;
      setNotifications((prev) => [...prev, notif]);

      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n !== notif));
      }, 3000);
    } catch (error) {
      await Log(
        "frontend",
        "error",
        "page",
        `Theme change failed: ${error.message}`
      );
    }
  };

  const handleViewDetails = async () => {
    try {
      await Log(
        "frontend",
        "debug",
        "page",
        "User clicked View Details"
      );

      // Simulate action
      const notif = "Details loaded successfully";
      setNotifications((prev) => [...prev, notif]);

      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n !== notif));
      }, 3000);
    } catch (error) {
      await Log(
        "frontend",
        "error",
        "page",
        `View details failed: ${error.message}`
      );
    }
  };

  const bgColor = theme === "dark" ? "#333" : "#f9f9f9";
  const textColor = theme === "dark" ? "#fff" : "#333";

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "20px",
        borderRadius: "8px",
        marginTop: "20px",
      }}
    >
      <h2>Dashboard</h2>

      {notifications.length > 0 && (
        <div
          style={{
            backgroundColor: "#d4edda",
            color: "#155724",
            padding: "10px",
            borderRadius: "4px",
            marginBottom: "15px",
          }}
        >
          {notifications.map((notif, idx) => (
            <div key={idx}>✓ {notif}</div>
          ))}
        </div>
      )}

      <div style={{ marginBottom: "20px" }}>
        <p>Current Theme: {theme}</p>
        <button
          onClick={() => handleThemeChange(theme === "light" ? "dark" : "light")}
          style={{
            padding: "8px 16px",
            marginRight: "10px",
            backgroundColor: theme === "dark" ? "#555" : "#ddd",
            color: theme === "dark" ? "#fff" : "#000",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Toggle Theme
        </button>
        <button
          onClick={handleViewDetails}
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          View Details
        </button>
      </div>

      <div
        style={{
          backgroundColor: theme === "dark" ? "#555" : "#fff",
          padding: "15px",
          borderRadius: "4px",
          border: `1px solid ${theme === "dark" ? "#777" : "#ddd"}`,
        }}
      >
        <h3>Dashboard Statistics</h3>
        <p>Active Users: 1,234</p>
        <p>Total Events Logged: {Math.floor(Math.random() * 10000)}</p>
        <p>System Status: ✓ Online</p>
      </div>
    </div>
  );
};

export default Dashboard;
