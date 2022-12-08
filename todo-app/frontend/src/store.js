import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoReducer.jsx";
import userReducer from "./reducers/userReducer.jsx";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    user: userReducer,
  },
});

export default store;
