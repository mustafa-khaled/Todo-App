import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "One", completed: false },
    { id: 2, title: "Two", completed: true },
    { id: 3, title: "Three", completed: false },
    { id: 4, title: "Four", completed: true },
    { id: 5, title: "Five", completed: false },
  ],

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleCompleted: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },

    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleCompleted, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

// Filter Not Completed Items
export const getNotCompleted = (state) =>
  state.todos.filter((todo) => todo.completed === false);
