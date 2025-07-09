import React from "react";
import { Typography, Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        bgcolor: "background.default",
        color: "text.primary",
        p: 4,
      }}>
      <Typography variant="h3">Welcome to the Home Page</Typography>
    </Box>
  );
};

export default Home;
