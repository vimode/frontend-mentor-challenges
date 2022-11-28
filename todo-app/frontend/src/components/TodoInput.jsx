import { useState } from "react";
import "./todos.scss";

function TodoInput({ updateTodoList }) {
  const [todoItem, setTodoItem] = useState("");

  // DELETE: this function and its usage
  const randId = () => {
    return Number((Math.random() * 100000).toFixed(0));
  };

  const addTodo = (event) => {
    event.preventDefault();
    updateTodoList({
      title: todoItem,
      completed: false,
      id: randId(),
    });
    setTodoItem("");
  };

  return (
    <form onSubmit={addTodo}>
      <input type="checkbox" name="addtodoCheck" id="addtodoCheck" disabled />
      <input
        type="text"
        aria-label="Insert Todo"
        name="todoinput"
        id="todoinput"
        placeholder="Create a new todo"
        value={todoItem}
        onChange={({ target }) => setTodoItem(target.value)}
      />
    </form>
  );
}

export default TodoInput;
