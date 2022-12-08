import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import TodoWrapper from "./components/Todowrapper.jsx";
import Header from "./components/Header.jsx";
import "./App.scss";

import registrationService from "./services/users.js";
import { clearLocalState } from "./reducers/todoReducer.jsx";
import { loginUser, authUser, logoutUser } from "./reducers/userReducer.jsx";

function App() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedTodoUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      dispatch(authUser(user));
    }
  }, []);

  async function handleLogin(event) {
    event.preventDefault();

    try {
      dispatch(loginUser(username, password));
      setUsername("");
      setPassword("");
    } catch (exception) {
      console.error("wrong credentials");
    }
  }

  async function handleRegistration(event) {
    event.preventDefault();
    const userDetails = { name, username, password };
    try {
      await registrationService.register(userDetails);
      setName("")
      setUsername("");
      setPassword("");
    } catch (exception) {
      console.error(exception);
    }
  }

  function handleLogout() {
    dispatch(logoutUser());
    dispatch(clearLocalState([]));
  }

  return (
    <div className="App">
      <Header
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        name={name}
        setName={setName}
        handleLogin={handleLogin}
        handleRegistration={handleRegistration}
        handleLogout={handleLogout}
      />
      <TodoWrapper />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

// Footer component
function Footer() {
  return (
    <footer>
      Created by <a href="#">vimo</a>
    </footer>
  );
}
