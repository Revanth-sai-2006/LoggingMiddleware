import React from "react";
import { Log } from "../middleware/logger";
import { Button, Box, CircularProgress } from "@mui/material";
import { Login as LoginIcon } from "@mui/icons-material";

const LoginButton = () => {
  const [loading, setLoading] = React.useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      await Log(
        "frontend",
        "info",
        "component",
        "User clicked login button"
      );
      alert("Login Clicked");
    } catch (error) {
      await Log(
        "frontend",
        "error",
        "component",
        `Login button click failed: ${error.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Button
        onClick={handleClick}
        disabled={loading}
        variant="contained"
        size="large"
        endIcon={loading ? <CircularProgress size={20} /> : <LoginIcon />}
        sx={{ padding: "10px 30px", fontSize: "16px" }}
      >
        {loading ? "Processing..." : "Login"}
      </Button>
    </Box>
  );
};

export default LoginButton;
