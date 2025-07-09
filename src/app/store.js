import uiReducer from "../feature/Uislice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});
