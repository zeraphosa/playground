import { configureStore } from "@reduxjs/toolkit";
import todo from "./todo";
import theme from "./theme";

const store = configureStore({
  reducer: {
    todo,
    theme,
  },
});

export default store;
