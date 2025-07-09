import React from "react";
import {
  Typography,
  TextField,
  Button,
  Box,
  Divider,
  Stack,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const Signin = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
      }}>
      <Box sx={{ maxWidth: 400, width: "100%" }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Sign In
        </Typography>
        <Stack spacing={2}>
          <TextField label="Email" type="email" fullWidth />
          <TextField label="Password" type="password" fullWidth />
          <Button variant="contained" fullWidth>
            Sign In
          </Button>
        </Stack>
        <Divider sx={{ my: 3 }}>OR</Divider>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          sx={{ textTransform: "none" }}>
          Sign in with Google
        </Button>
      </Box>
    </Box>
  );
};

export default Signin;
