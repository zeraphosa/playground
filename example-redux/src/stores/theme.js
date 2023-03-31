import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: false
}

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme = !state.theme;
    },
  },
});
export const { changeTheme } = theme.actions;
export default theme.reducer;
