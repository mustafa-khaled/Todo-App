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
        id: new Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
