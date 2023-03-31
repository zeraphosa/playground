import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todos.actions;
export default todos.reducer;
