import { useDispatch } from "react-redux";
import { addTodos } from "../reducers/todoReducer.jsx";
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";

function TodoWrapper({ allTodos }) {
  const dispatch = useDispatch();

  function updateTodoList(todoItem) {
    dispatch(addTodos(todoItem));
  }

  return (
    <>
      <TodoInput updateTodoList={updateTodoList} />
      <TodoList allTodos={allTodos} />
    </>
  );
}

export default TodoWrapper;
