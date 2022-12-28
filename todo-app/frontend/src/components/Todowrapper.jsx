import { useDispatch,useSelector } from "react-redux";
import { addTodos } from "../reducers/todoReducer.jsx";
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";

function TodoWrapper() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.user);

  function updateTodoList(todoItem) {
    dispatch(addTodos(todoItem));
  }

  return (
    <>
      {loggedUser.token && <TodoInput updateTodoList={updateTodoList} />}
      <TodoList />
    </>
  );
}

export default TodoWrapper;
