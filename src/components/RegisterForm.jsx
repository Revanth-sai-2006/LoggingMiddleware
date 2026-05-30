import React, { useState } from "react";
import { Log } from "../middleware/logger";
import { useForm } from "../hooks/useForm";
import {
  Box,
  TextField,
  Button,
  Alert,
  Card,
  CardContent,
  Stack,
  CircularProgress,
} from "@mui/material";
import { AppRegistration as RegisterIcon } from "@mui/icons-material";

const RegisterForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (values) => {
    try {
      setLoading(true);
      await Log(
        "frontend",
        "info",
        "component",
        `User registration initiated for: ${values.email}`
      );

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      await Log(
        "frontend",
        "info",
        "component",
        "User registration successful"
      );

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      await Log(
        "frontend",
        "error",
        "component",
        `Registration failed: ${error.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  const { values, handleChange, handleSubmit } = useForm(
    { email: "", password: "", confirmPassword: "" },
    handleRegister
  );

  return (
    <Card sx={{ maxWidth: 500, mx: "auto", mt: 2 }}>
      <CardContent>
        {submitted && (
          <Alert severity="success" sx={{ mb: 2 }}>
            ✅ Registration successful!
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Stack spacing={2}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <Button
              fullWidth
              variant="contained"
              type="submit"
              disabled={loading}
              endIcon={loading ? <CircularProgress size={20} /> : <RegisterIcon />}
              sx={{ mt: 2 }}
            >
              {loading ? "Processing..." : "Register"}
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
