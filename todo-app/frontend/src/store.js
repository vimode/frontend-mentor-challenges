import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoReducer.jsx";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
