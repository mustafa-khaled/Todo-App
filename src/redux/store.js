import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import themeReducer from "./darkModeSlice"; // Import your themeSlice

// Get todo list  from local storage
const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
// Get theme from local storage
const storedTheme = JSON.parse(localStorage.getItem("theme")) || false;

const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer,
  },
  preloadedState: {
    todos: {
      todos: storedTodos,
      filter: "All",
    },
    theme: storedTheme,
  },
});

store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState().todos.todos));
  localStorage.setItem("theme", JSON.stringify(store.getState().theme));
});

export default store;
