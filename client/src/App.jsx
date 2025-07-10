import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ShareTarget from "./pages/ShareTarget";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";

const App = () => {
  const mode = useSelector((state) => state.ui.theme);

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sharetarget" element={<ShareTarget />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
