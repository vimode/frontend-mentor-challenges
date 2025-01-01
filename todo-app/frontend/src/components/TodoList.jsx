import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initializeTodos,
  removeCompleted,
  removeTodoItem,
  toggleTodoComplete,
} from "../reducers/todoReducer.jsx";
import "./todos.scss";

//Todo List component
function TodoList() {
  const [listFilter, setListFilter] = useState("all");

  const allTodos = useSelector((state) => state.todos);
  const loggedUser = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedUser.hasOwnProperty("token")) {
      dispatch(initializeTodos(loggedUser));
    }
  }, [loggedUser]);

  function deleteCompleted() {
    dispatch(removeCompleted());
  }

  const filteredTodos = allTodos.filter((todo) => {
    if (listFilter === "all") {
      return todo;
    } else if (listFilter === "completed") {
      return todo.completed === true;
    } else {
      return todo.completed === false;
    }
  });

  const activeTodoCount = allTodos.filter((todo) => todo.completed === false);

  return (
    <section className="todoList">
      {loggedUser.token ? (
        <ul className="todoItem">
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
          <>  
            <p className="tempItem">Please Login or Register to get started</p>
            <p className="tempItem">username: demouserone <br/> password: demo123123</p>
          </>

      )}
      {allTodos.length > 0 && (
        <div className=" todoListActions">
          <p>{activeTodoCount.length} tasks left</p>
          <ul>
            <li>
              <button
                onClick={() => setListFilter("all")}
                className={`${listFilter === "all" ? "filterHighlight" : ""}`}
              >
                All
              </button>
            </li>
            <li>
              <button
                onClick={() => setListFilter("active")}
                className={`${
                  listFilter === "active" ? "filterHighlight" : ""
                }`}
              >
                Active
              </button>
            </li>
            <li>
              <button
                onClick={() => setListFilter("completed")}
                className={`${
                  listFilter === "completed" ? "filterHighlight" : ""
                }`}
              >
                Completed
              </button>
            </li>
          </ul>
          <button onClick={deleteCompleted}>Clear Completed</button>
        </div>
      )}
    </section>
  );
}

export default TodoList;

// TodoItem Component
function TodoItem({ todo }) {
  const [itemHovered, setItemHovered] = useState(false);
  const loggedUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function todoCompleteStatus(todo) {
    dispatch(toggleTodoComplete(todo));
  }

  function deleteTodo(todoItem) {
    dispatch(removeTodoItem(todoItem));
  }

  return (
    <li
      key={todo.id}
      onMouseEnter={() => setItemHovered(true)}
      onMouseLeave={() => setItemHovered(false)}
    >
      <div>
        <input
          type="checkbox"
          name={todo.id}
          id={todo.id}
          defaultChecked={todo.completed}
          onClick={() => todoCompleteStatus(todo)}
        />
        <label htmlFor={todo.id}>{todo.title}</label>
      </div>
      {itemHovered && (
        <span onClick={() => deleteTodo(todo)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
            <path
              fill="#494C6B"
              fillRule="evenodd"
              d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
            />
          </svg>
        </span>
      )}
    </li>
  );
}
