import React, { useState } from "react";
import { Log } from "./middleware/logger";
import LoginButton from "./components/LoginButton";
import RegisterForm from "./components/RegisterForm";
import UserList from "./components/UserList";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import "./styles/App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = async (page) => {
    try {
      await Log(
        "frontend",
        "info",
        "component",
        `Navigation: ${currentPage} -> ${page}`
      );
      setCurrentPage(page);
    } catch (error) {
      await Log(
        "frontend",
        "error",
        "component",
        `Navigation failed: ${error.message}`
      );
    }
  };

  return (
    <ErrorBoundary>
      <div className="app-container">
        <header>
          <h1>Frontend Logging System</h1>
          <nav className="nav-buttons">
            <button
              onClick={() => handleNavigation("home")}
              className={currentPage === "home" ? "active" : ""}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("login")}
              className={currentPage === "login" ? "active" : ""}
            >
              Login
            </button>
            <button
              onClick={() => handleNavigation("register")}
              className={currentPage === "register" ? "active" : ""}
            >
              Register
            </button>
            <button
              onClick={() => handleNavigation("users")}
              className={currentPage === "users" ? "active" : ""}
            >
              Users
            </button>
            <button
              onClick={() => handleNavigation("dashboard")}
              className={currentPage === "dashboard" ? "active" : ""}
            >
              Dashboard
            </button>
          </nav>
        </header>

        <main>
          {currentPage === "home" && <Home />}
          {currentPage === "login" && (
            <div>
              <h2>Login</h2>
              <LoginButton />
            </div>
          )}
          {currentPage === "register" && (
            <div>
              <h2>User Registration</h2>
              <RegisterForm />
            </div>
          )}
          {currentPage === "users" && (
            <div>
              <h2>Browse Users</h2>
              <UserList />
            </div>
          )}
          {currentPage === "dashboard" && <Dashboard />}
        </main>

        <footer style={{ marginTop: "40px", padding: "20px", borderTop: "1px solid #ddd", textAlign: "center", color: "#666", fontSize: "14px" }}>
          <p>Frontend Logging System v1.0 | All events are being logged</p>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;
