import React from "react";
import { Typography, TextField, Button, Box, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const Signin = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        p: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Box width="100%" maxWidth={400}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Sign In
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField label="Email" type="email" fullWidth />
          <TextField label="Password" type="password" fullWidth />
          <Button variant="contained" fullWidth>
            Sign In
          </Button>
          <Divider>OR</Divider>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<GoogleIcon />}
            sx={{ textTransform: "none" }}>
            Sign in with Google
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Signin;
