import React, { useState } from "react";
import { Log } from "./middleware/logger";
import LoginButton from "./components/LoginButton";
import RegisterForm from "./components/RegisterForm";
import UserList from "./components/UserList";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
} from "@mui/material";
import {
  Home as HomeIcon,
  Login as LoginIcon,
  AppRegistration as RegisterIcon,
  People as PeopleIcon,
  Dashboard as DashboardIcon,
} from "@mui/icons-material";

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

  const navItems = [
    { id: "home", label: "Home", icon: HomeIcon },
    { id: "login", label: "Login", icon: LoginIcon },
    { id: "register", label: "Register", icon: RegisterIcon },
    { id: "users", label: "Users", icon: PeopleIcon },
    { id: "dashboard", label: "Dashboard", icon: DashboardIcon },
  ];

  return (
    <ErrorBoundary>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* AppBar Header */}
        <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Frontend Logging System
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Navigation Buttons */}
        <AppBar position="static" sx={{ backgroundColor: "#f5f5f5" }} elevation={1}>
          <Toolbar sx={{ justifyContent: "flex-start", gap: 1, flexWrap: "wrap" }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  variant={currentPage === item.id ? "contained" : "outlined"}
                  color={currentPage === item.id ? "primary" : "inherit"}
                  startIcon={<Icon />}
                  sx={{
                    color: currentPage === item.id ? "white" : "#333",
                    borderColor: currentPage === item.id ? "#1976d2" : "#ddd",
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ py: 4, flex: 1 }}>
          {currentPage === "home" && <Home />}
          {currentPage === "login" && (
            <Box>
              <Typography variant="h4" sx={{ mb: 3 }}>
                Login
              </Typography>
              <LoginButton />
            </Box>
          )}
          {currentPage === "register" && (
            <Box>
              <Typography variant="h4" sx={{ mb: 3 }}>
                User Registration
              </Typography>
              <RegisterForm />
            </Box>
          )}
          {currentPage === "users" && (
            <Box>
              <Typography variant="h4" sx={{ mb: 3 }}>
                Browse Users
              </Typography>
              <UserList />
            </Box>
          )}
          {currentPage === "dashboard" && <Dashboard />}
        </Container>

        {/* Footer */}
        <Box
          sx={{
            backgroundColor: "#f9f9f9",
            borderTop: "1px solid #ddd",
            py: 3,
            mt: "auto",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="textSecondary">
            Frontend Logging System v1.0 | All events are being logged
          </Typography>
        </Box>
      </Box>
    </ErrorBoundary>
  );
}

export default App;
