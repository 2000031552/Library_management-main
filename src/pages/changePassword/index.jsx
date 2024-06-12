// src/pages/ChangePassword.jsx
import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const ChangePassword = () => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    // Handle the password change logic here
    console.log("Password changed to:", password);
  };

  return (
    <Box wt= {2} p={2} display="flex" flexDirection="column" alignItems="left">
      <Typography variant="h4" mb={2}>
        Change Password
      </Typography>
      <TextField
        label="New Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Confirm Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="secondary" onClick={handleSubmit} sx={{ mt: 2 }}>
        Change Password
      </Button>
    </Box>
  );
};

export default ChangePassword;
