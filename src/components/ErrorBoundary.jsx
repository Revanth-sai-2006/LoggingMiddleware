import React from "react";
import { Log } from "../middleware/logger";
import { Alert, Box } from "@mui/material";
import { Error as ErrorIcon } from "@mui/icons-material";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    Log(
      "frontend",
      "fatal",
      "component",
      `Error caught by boundary: ${error.message}`
    );
    console.error("Error Details:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ p: 2, m: 2 }}>
          <Alert severity="error" icon={<ErrorIcon />}>
            <strong>Oops! Something went wrong</strong>
            <details style={{ whiteSpace: "pre-wrap", marginTop: "10px" }}>
              {this.state.error && this.state.error.toString()}
            </details>
          </Alert>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
