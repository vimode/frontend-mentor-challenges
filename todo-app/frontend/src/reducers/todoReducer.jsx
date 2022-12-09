import { createSlice } from "@reduxjs/toolkit";
import todoService from "../services/todos.js";

const todoSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    setTodos(state, action) {
      return action.payload;
    },
    appendTodo(state, action) {
      return [action.payload, ...state]
      // return state.concat(action.payload);
    },
    updateTodo(state, action) {
      return state.map((todo) =>
        todo.id !== action.payload.id ? todo : action.payload
      );
    },
    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    updateCompleted(state) {
      return state.filter((todo) => todo.completed === false);
    },
  },
});

export const initializeTodos = () => {
  return async (dispatch) => {
    const todos = await todoService.getAll();
    dispatch(setTodos(todos));
  };
};

export const addTodos = (todoItem) => {
  return async (dispatch) => {
    const newTodo = await todoService.create(todoItem);
    dispatch(appendTodo(newTodo));
  };
};

export const toggleTodoComplete = (todoItem) => {
  return async (dispatch, getState) => {
    const toggled = getState().todos.find((t) => t.id === todoItem.id);
    const toggleComplete = { ...toggled, completed: !toggled.completed };
    const completeTodo = await todoService.update(toggleComplete);
    dispatch(updateTodo(completeTodo));
  };
};

export const removeTodoItem = (todoItem) => {
  return async (dispatch) => {
    await todoService.remove(todoItem);
    dispatch(deleteTodo(todoItem));
  };
};

export const removeCompleted = () => {
  return async (dispatch) => {
    await todoService.clearCompleted();
    await dispatch(updateCompleted());
  };
};

// user logged out:  Clear local state of the todo store
export const clearLocalState = () => {
  return async (dispatch) => {
    await dispatch(setTodos([]));
  };
};

export const { setTodos, appendTodo, updateTodo, deleteTodo, updateCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
