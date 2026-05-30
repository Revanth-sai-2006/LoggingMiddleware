import { Log } from "../middleware/logger";

/**
 * Fetch users from API
 */
export const getUsers = async () => {
  try {
    await Log(
      "frontend",
      "info",
      "api",
      "Fetching users from API"
    );

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    await Log(
      "frontend",
      "info",
      "api",
      `Users fetched successfully - ${data.length} users loaded`
    );

    return data;
  } catch (error) {
    await Log(
      "frontend",
      "error",
      "api",
      error.message
    );
    throw error;
  }
};

/**
 * Fetch posts from API
 */
export const getPosts = async () => {
  try {
    await Log(
      "frontend",
      "info",
      "api",
      "Fetching posts from API"
    );

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    await Log(
      "frontend",
      "info",
      "api",
      `Posts fetched successfully - ${data.length} posts loaded`
    );

    return data;
  } catch (error) {
    await Log(
      "frontend",
      "error",
      "api",
      error.message
    );
    throw error;
  }
};
