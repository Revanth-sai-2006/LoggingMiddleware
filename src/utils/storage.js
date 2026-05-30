import { Log } from "../middleware/logger";

/**
 * Utility function for localStorage with logging
 */
export const setStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    Log(
      "frontend",
      "debug",
      "utils",
      `Storage item set: ${key}`
    );
  } catch (error) {
    Log(
      "frontend",
      "error",
      "utils",
      `Failed to set storage item ${key}: ${error.message}`
    );
  }
};

/**
 * Utility function for retrieving from localStorage with logging
 */
export const getStorageItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    if (item) {
      Log(
        "frontend",
        "debug",
        "utils",
        `Storage item retrieved: ${key}`
      );
      return JSON.parse(item);
    }
    return null;
  } catch (error) {
    Log(
      "frontend",
      "error",
      "utils",
      `Failed to get storage item ${key}: ${error.message}`
    );
    return null;
  }
};

/**
 * Utility function for removing from localStorage with logging
 */
export const removeStorageItem = (key) => {
  try {
    localStorage.removeItem(key);
    Log(
      "frontend",
      "debug",
      "utils",
      `Storage item removed: ${key}`
    );
  } catch (error) {
    Log(
      "frontend",
      "error",
      "utils",
      `Failed to remove storage item ${key}: ${error.message}`
    );
  }
};
