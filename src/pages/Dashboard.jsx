import React, { useState } from "react";
import { Log } from "../middleware/logger";
import {
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  Alert,
  Stack,
  Chip,
  Grid,
  Paper,
} from "@mui/material";
import {
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
  Info as InfoIcon,
} from "@mui/icons-material";

const Dashboard = () => {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState([]);

  const handleThemeChange = async (newTheme) => {
    try {
      await Log(
        "frontend",
        "info",
        "page",
        `Theme changed from ${theme} to ${newTheme}`
      );
      setTheme(newTheme);

      const notif = `Theme switched to ${newTheme} mode`;
      setNotifications((prev) => [...prev, notif]);

      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n !== notif));
      }, 3000);
    } catch (error) {
      await Log(
        "frontend",
        "error",
        "page",
        `Theme change failed: ${error.message}`
      );
    }
  };

  const handleViewDetails = async () => {
    try {
      await Log(
        "frontend",
        "debug",
        "page",
        "User clicked View Details"
      );

      const notif = "Details loaded successfully";
      setNotifications((prev) => [...prev, notif]);

      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n !== notif));
      }, 3000);
    } catch (error) {
      await Log(
        "frontend",
        "error",
        "page",
        `View details failed: ${error.message}`
      );
    }
  };

  const isDark = theme === "dark";

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: "bold" }}>
        Dashboard
      </Typography>

      {notifications.length > 0 && (
        <Box sx={{ mb: 2 }}>
          {notifications.map((notif, idx) => (
            <Alert key={idx} severity="success" icon={<InfoIcon />} sx={{ mb: 1 }}>
              ✓ {notif}
            </Alert>
          ))}
        </Box>
      )}

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Current Theme
              </Typography>
              <Chip
                label={`${theme.charAt(0).toUpperCase() + theme.slice(1)} Mode`}
                color={isDark ? "default" : "primary"}
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <Stack direction="row" spacing={1}>
                <Button
                  variant={theme === "light" ? "contained" : "outlined"}
                  onClick={() => handleThemeChange("light")}
                  startIcon={<LightIcon />}
                >
                  Light
                </Button>
                <Button
                  variant={theme === "dark" ? "contained" : "outlined"}
                  onClick={() => handleThemeChange("dark")}
                  startIcon={<DarkIcon />}
                >
                  Dark
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Quick Actions
              </Typography>
              <Button
                variant="contained"
                color="info"
                onClick={handleViewDetails}
                fullWidth
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper
        sx={{
          p: 3,
          backgroundColor: isDark ? "#1e1e1e" : "#f5f5f5",
          color: isDark ? "#fff" : "#333",
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          Dashboard Statistics
        </Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ p: 2, backgroundColor: isDark ? "#2a2a2a" : "#fff", borderRadius: 1 }}>
              <Typography color="textSecondary" variant="body2">
                Active Users
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#DAA520" }}>
                1,234
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ p: 2, backgroundColor: isDark ? "#2a2a2a" : "#fff", borderRadius: 1 }}>
              <Typography color="textSecondary" variant="body2">
                Total Events Logged
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#DAA520" }}>
                {Math.floor(Math.random() * 10000)}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ p: 2, backgroundColor: isDark ? "#2a2a2a" : "#fff", borderRadius: 1 }}>
              <Typography color="textSecondary" variant="body2">
                System Status
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4caf50" }}>
                ✓ Online
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ p: 2, backgroundColor: isDark ? "#2a2a2a" : "#fff", borderRadius: 1 }}>
              <Typography color="textSecondary" variant="body2">
                Uptime
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#DAA520" }}>
                99.9%
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Dashboard;
