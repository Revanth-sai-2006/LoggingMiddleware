import React, { useState, useEffect } from "react";
import { Log } from "../middleware/logger";
import { useFetch } from "../hooks/useFetch";

/**
 * UserList Component that displays fetched data with comprehensive logging
 */
const UserList = () => {
  const { data: users, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = async (user) => {
    try {
      await Log(
        "frontend",
        "info",
        "component",
        `User selected: ${user.name}`
      );
      setSelectedUser(user);
    } catch (err) {
      await Log(
        "frontend",
        "error",
        "component",
        `Failed to select user: ${err.message}`
      );
    }
  };

  const handleClearSelection = async () => {
    try {
      await Log(
        "frontend",
        "debug",
        "component",
        "User selection cleared"
      );
      setSelectedUser(null);
    } catch (err) {
      await Log(
        "frontend",
        "error",
        "component",
        `Failed to clear selection: ${err.message}`
      );
    }
  };

  if (loading) {
    return <div style={{ padding: "20px" }}>Loading users...</div>;
  }

  if (error) {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8d7da",
          color: "#721c24",
          borderRadius: "4px",
        }}
      >
        Error loading users: {error.message}
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h3>Users List</h3>

      {selectedUser && (
        <div
          style={{
            backgroundColor: "#e7f3ff",
            padding: "15px",
            borderRadius: "4px",
            marginBottom: "20px",
            border: "1px solid #b3d9ff",
          }}
        >
          <h4>{selectedUser.name}</h4>
          <p>
            <strong>Email:</strong> {selectedUser.email}
          </p>
          <p>
            <strong>Phone:</strong> {selectedUser.phone}
          </p>
          <p>
            <strong>Company:</strong> {selectedUser.company?.name}
          </p>
          <button
            onClick={handleClearSelection}
            style={{
              padding: "6px 12px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Close Details
          </button>
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "15px",
        }}
      >
        {users &&
          users.slice(0, 6).map((user) => (
            <div
              key={user.id}
              style={{
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: selectedUser?.id === user.id ? "#f0f0f0" : "white",
                transition: "background-color 0.2s",
              }}
              onClick={() => handleSelectUser(user)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f5f5f5")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  selectedUser?.id === user.id ? "#f0f0f0" : "white")
              }
            >
              <h4>{user.name}</h4>
              <p style={{ margin: "5px 0", fontSize: "14px" }}>
                {user.email}
              </p>
              <p style={{ margin: "5px 0", fontSize: "12px", color: "#666" }}>
                {user.company?.name}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserList;
