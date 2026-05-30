import React from "react";
import { Log } from "../middleware/logger";

const LoginButton = () => {
  const handleClick = async () => {
    try {
      await Log(
        "frontend",
        "info",
        "component",
        "User clicked login button"
      );
      alert("Login Clicked");
    } catch (error) {
      await Log(
        "frontend",
        "error",
        "component",
        `Login button click failed: ${error.message}`
      );
    }
  };

  return (
    <button onClick={handleClick} style={{ padding: "10px 20px", fontSize: "16px" }}>
      Login
    </button>
  );
};

export default LoginButton;
