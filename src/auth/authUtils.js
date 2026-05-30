import { Log } from "../middleware/logger";

/**
 * Authentication utility functions with logging
 */

export const login = async (username, password) => {
  try {
    await Log(
      "frontend",
      "info",
      "auth",
      "User login initiated"
    );

    // Simulate API call
    if (username && password) {
      await Log(
        "frontend",
        "info",
        "auth",
        `Login successful for user: ${username}`
      );
      return { success: true, user: username };
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    await Log(
      "frontend",
      "warn",
      "auth",
      `Login failed: ${error.message}`
    );
    throw error;
  }
};

export const logout = async () => {
  try {
    await Log(
      "frontend",
      "info",
      "auth",
      "User logout initiated"
    );

    // Simulate logout
    await Log(
      "frontend",
      "info",
      "auth",
      "User logged out successfully"
    );
    return { success: true };
  } catch (error) {
    await Log(
      "frontend",
      "error",
      "auth",
      `Logout failed: ${error.message}`
    );
    throw error;
  }
};

export const verifyToken = async (token) => {
  try {
    await Log(
      "frontend",
      "debug",
      "auth",
      "Token verification initiated"
    );

    if (token && token.length > 0) {
      await Log(
        "frontend",
        "info",
        "auth",
        "Token verified successfully"
      );
      return { valid: true };
    }
    throw new Error("Invalid token");
  } catch (error) {
    await Log(
      "frontend",
      "warn",
      "auth",
      `Token verification failed: ${error.message}`
    );
    throw error;
  }
};
