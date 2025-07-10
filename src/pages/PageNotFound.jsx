import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fafafa",
        p: 2,
      }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontSize: "6rem", fontWeight: 700, mb: 2 }}>
          404
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{ mb: 4, color: "text.secondary" }}>
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </Typography>
        <Button
          component={RouterLink}
          to="/"
          variant="contained"
          size="large"
          sx={{ textTransform: "none", borderRadius: 2, px: 4, py: 1.5 }}>
          Go to Home Page
        </Button>
      </Container>
    </Box>
  );
}
