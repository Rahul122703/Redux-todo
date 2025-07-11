import React from "react";
import { Typography, Box } from "@mui/material";

import InstallButton from "../components/InstallButton";
import ToDoList from "../feature/ToDoList";

const Home = () => {
  return (
    <>
      <ToDoList />
      <InstallButton />
    </>
  );
};

export default Home;
