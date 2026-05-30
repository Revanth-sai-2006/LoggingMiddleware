import React, { useEffect, useState } from "react";
import { Log } from "../middleware/logger";
import { getUsers } from "../api/userApi";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Log(
          "frontend",
          "info",
          "page",
          "Home page loaded"
        );

        const userData = await getUsers();
        setUsers(userData);
      } catch (err) {
        await Log(
          "frontend",
          "error",
          "page",
          `Failed to load users: ${err.message}`
        );
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <p>Users loaded: {users.length}</p>
      <ul>
        {users.slice(0, 5).map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
