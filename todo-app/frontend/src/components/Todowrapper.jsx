import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../reducers/todoReducer.jsx";
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";

function TodoWrapper() {
  const loggedUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function updateTodoList(todoItem) {
    dispatch(addTodos(todoItem));
  }

  return (
    <>
      <TodoInput updateTodoList={updateTodoList} />
      <TodoList  /> 
    </>
  );
}

export default TodoWrapper;

//temp wrapper component
function TempWrapper () {
  return (
    <>
      <div>temp</div>
    </>
  )

}
