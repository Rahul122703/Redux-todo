import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./feature/api/apiSlice";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ApiProvider api={apiSlice}>
    <App />
  </ApiProvider>
);
