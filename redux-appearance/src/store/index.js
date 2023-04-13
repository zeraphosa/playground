import { configureStore } from "@reduxjs/toolkit";
import mode from "./appearance";

const store = configureStore({
  reducer: {
    mode,
  },
});

export default store;
