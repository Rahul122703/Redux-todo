import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
const Hero = () => {
  return (
    <Container sx={{ py: 10 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" gutterBottom>
            Welcome to MUI + Redux + Vite
          </Typography>
          <Typography variant="h6" paragraph>
            "Hey "
          </Typography>
          <Button variant="contained" size="large">
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
