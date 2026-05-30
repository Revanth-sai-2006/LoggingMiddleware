import React, { useState } from "react";
import { Log } from "../middleware/logger";
import { useForm } from "../hooks/useForm";

/**
 * User Registration Component with comprehensive logging
 */
const RegisterForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleRegister = async (values) => {
    try {
      await Log(
        "frontend",
        "info",
        "component",
        `User registration initiated for: ${values.email}`
      );

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      await Log(
        "frontend",
        "info",
        "component",
        "User registration successful"
      );

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      await Log(
        "frontend",
        "error",
        "component",
        `Registration failed: ${error.message}`
      );
    }
  };

  const { values, handleChange, handleSubmit } = useForm(
    { email: "", password: "", confirmPassword: "" },
    handleRegister
  );

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px 0",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h3>Register</h3>
      {submitted && (
        <div
          style={{
            backgroundColor: "#d4edda",
            color: "#155724",
            padding: "10px",
            borderRadius: "4px",
            marginBottom: "10px",
          }}
        >
          ✅ Registration successful!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px", padding: "5px", width: "200px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px", padding: "5px", width: "200px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px", padding: "5px", width: "200px" }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: "8px 16px" }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
