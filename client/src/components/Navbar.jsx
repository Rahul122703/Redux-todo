import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../feature/Uislice";
import ShareButton from "./ShareButton";

const Navbar = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.ui.theme);

  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleToggleTheme = () => dispatch(toggleTheme());

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={2}>
          <Tooltip title="Home" arrow>
            <IconButton color="inherit" component={Link} to="/">
              <HomeIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="h6" noWrap>
            MyApp
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <Tooltip
            title={`Switch to ${themeMode === "dark" ? "light" : "dark"} mode`}
            arrow>
            <IconButton color="inherit" onClick={handleToggleTheme}>
              {themeMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>

          <Tooltip title="Account" arrow>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <AccountCircle />
            </IconButton>
          </Tooltip>
          <ShareButton />
          <Menu
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleMenuClose}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
            <MenuItem component={Link} to="/signin" onClick={handleMenuClose}>
              Sign In
            </MenuItem>
            <MenuItem component={Link} to="/signup" onClick={handleMenuClose}>
              Sign Up
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
