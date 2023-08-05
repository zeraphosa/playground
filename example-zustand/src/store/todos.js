import { create } from "zustand";

const useTodosStore = create((set) => ({
  todos: ['asdf','adad','dada'],
  addTodo: (item) => set((state) => ({ todos: [...state.todos, item] })),
}));

export default useTodosStore