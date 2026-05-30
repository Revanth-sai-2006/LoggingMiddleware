import React, { useState } from "react";
import { Log } from "../middleware/logger";
import { useFetch } from "../hooks/useFetch";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Alert,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

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
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error">Error loading users: {error.message}</Alert>
    );
  }

  return (
    <Box>
      <Dialog open={!!selectedUser} onClose={handleClearSelection} maxWidth="sm" fullWidth>
        {selectedUser && (
          <>
            <DialogTitle>{selectedUser.name}</DialogTitle>
            <DialogContent>
              <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography>
                  <strong>Email:</strong> {selectedUser.email}
                </Typography>
                <Typography>
                  <strong>Phone:</strong> {selectedUser.phone}
                </Typography>
                <Typography>
                  <strong>Company:</strong> {selectedUser.company?.name}
                </Typography>
                <Typography>
                  <strong>Website:</strong> {selectedUser.website}
                </Typography>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClearSelection} endIcon={<CloseIcon />}>
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      <Grid container spacing={2}>
        {users &&
          users.slice(0, 6).map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Card
                onClick={() => handleSelectUser(user)}
                sx={{
                  cursor: "pointer",
                  transition: "all 0.3s",
                  "&:hover": {
                    boxShadow: 4,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {user.email}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {user.company?.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default UserList;
