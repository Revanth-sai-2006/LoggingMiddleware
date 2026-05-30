import { useState, useEffect } from "react";
import { Log } from "../middleware/logger";

/**
 * Custom hook for data fetching with logging
 */
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Log(
          "frontend",
          "debug",
          "hook",
          `useFetch hook triggered for URL: ${url}`
        );

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);

        await Log(
          "frontend",
          "info",
          "hook",
          `Data fetched successfully from ${url}`
        );
      } catch (err) {
        setError(err);
        await Log(
          "frontend",
          "error",
          "hook",
          `Fetch failed for ${url}: ${err.message}`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
