// src/pages/ChangePassword.jsx
import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const ChangePassword = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    // Handle the password change logic here
    console.log("Password changed to:", password);
  };

  return (
    <Box wt= {2} p={2} display="flex" flexDirection="column" justifyContent= "center" alignItems={"center"}>
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
        
        style={{ width: '400px' }}
      />
      <TextField
        label="Confirm Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        fullWidth
        margin="normal"
         
        style={{ width: '400px' }}
      />
      <Button variant="contained" color="secondary" onClick={handleSubmit} sx={{ mt: 2 }}>
        Change Password
      </Button>
    </Box>
  );
};

export default ChangePassword;
