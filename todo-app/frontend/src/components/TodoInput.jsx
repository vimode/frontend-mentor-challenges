import { useState } from "react";
import "./todos.scss";

function TodoInput({ updateTodoList }) {
  const [todoItem, setTodoItem] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    if (todoItem) {
      updateTodoList({
        title: todoItem.trim(),
        completed: false,
      });
      setTodoItem("");
    }
  };

  return (
    <form onSubmit={addTodo} className="todoInputForm">
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
