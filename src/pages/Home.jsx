import React, { useEffect } from "react";
import { Log } from "../middleware/logger";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import {
  Security as SecurityIcon,
  Edit as EditIcon,
  People as PeopleIcon,
  Dashboard as DashboardIcon,
  API as APIIcon,
  Flash as FlashIcon,
} from "@mui/icons-material";

const Home = () => {
  useEffect(() => {
    const logPageLoad = async () => {
      try {
        await Log(
          "frontend",
          "info",
          "page",
          "Home page loaded"
        );
      } catch (error) {
        console.error("Failed to log page load:", error);
      }
    };

    logPageLoad();
  }, []);

  const features = [
    {
      icon: SecurityIcon,
      title: "🔐 Authentication",
      description: "Test login functionality with comprehensive logging of auth events.",
    },
    {
      icon: EditIcon,
      title: "📝 Registration",
      description: "User registration form with form validation and event logging.",
    },
    {
      icon: PeopleIcon,
      title: "👥 User Management",
      description: "Browse and interact with users while all actions are logged.",
    },
    {
      icon: DashboardIcon,
      title: "📊 Dashboard",
      description: "Interactive dashboard with state changes and theme management logging.",
    },
    {
      icon: APIIcon,
      title: "🔗 API Integration",
      description: "Real API calls to JSONPlaceholder with comprehensive logging.",
    },
    {
      icon: FlashIcon,
      title: "⚡ Custom Hooks",
      description: "Custom React hooks with built-in logging for common patterns.",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold" }}>
          Welcome to Frontend Logging System
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
          This application demonstrates a comprehensive logging system built with React, Vite, and Material UI.
          Every action, navigation, API call, and state change is logged and sent to the evaluation service.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s",
                  "&:hover": {
                    boxShadow: 4,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardContent sx={{ flex: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Icon sx={{ mr: 1, color: "primary.main" }} />
                    <Typography variant="h6" component="h3">
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Paper sx={{ p: 3, backgroundColor: "#f0f7ff", border: "1px solid #90caf9" }}>
        <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: "bold" }}>
          📊 Logging Information
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body2">
            <strong>API Endpoint:</strong> http://4.224.186.213/evaluation-service/logs
          </Typography>
          <Typography variant="body2">
            <strong>Log Format:</strong> JSON with stack, level, package, and message
          </Typography>
          <Typography variant="body2">
            <strong>Log Levels:</strong> debug, info, warn, error, fatal
          </Typography>
          <Typography variant="body2">
            <strong>Packages:</strong> api, component, hook, page, state, style, auth, config, middleware, utils
          </Typography>
        </Box>
      </Paper>

      <Box sx={{ mt: 4, p: 2, textAlign: "center", color: "#666" }}>
        <Typography variant="body2">
          Open Developer Console (F12) to see all logged events in real-time
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
