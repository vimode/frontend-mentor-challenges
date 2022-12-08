import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./header.scss";

function Header({ username, setUsername, password, setPassword, name, setName, handleLogin, handleRegistration, handleLogout }) {
  const loggedUser = useSelector((state) => state.user);
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);

  function handleFormToggle(event) {
    const { name } = event.target
    if (name === 'loginButton') {
      setLoginVisible(!loginVisible)
      setRegisterVisible(false)
    } else if (name === 'registerButton') {
      setLoginVisible(false)
      setRegisterVisible(!registerVisible)
    }
  }

  function handleUserLogin(event) {
    handleLogin(event)
    setLoginVisible(!loginVisible)
  }

  function handleUserRegistration(event) {
    handleRegistration(event)
    setRegisterVisible(!registerVisible)
  }

  function handleUserLogout(event) {
    handleLogout()
    setLoginVisible(false)
    setRegisterVisible(false)
  }

  return (
    <header>
      <h1>TODO</h1>
      <div className="userItems">
        {loggedUser.length === 0 && (
          <button name="loginButton" onClick={(event) => handleFormToggle(event)}>Login</button>
        )}
        {loggedUser.length === 0 && (
          <button name="registerButton" onClick={(event) => handleFormToggle(event)}>Register</button>
        )}
        {loggedUser.token && <button onClick={handleUserLogout}>Logout</button>}
        {/* TODO: make this a radio input*/}
        <button>theme</button>
      </div>

      {loggedUser.length === 0 && (
        <>
          {loginVisible && (
            <div className="loginWrapper">
              <form onSubmit={handleUserLogin}>
                <input
                  type="text"
                  name="Username"
                  id="username"
                  placeholder="Username"
                  className="formUsername"
                  value={username}
                  onChange={({ target }) => setUsername(target.value)}
                />
                <input
                  type="password"
                  name="Password"
                  id="password"
                  placeholder="Password"
                  className="formPassword"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                />
                <button>Login</button>
              </form>
            </div>
          )}

          {registerVisible && (
            <div className="regWrapper">
              <form onSubmit={handleUserRegistration}>
                <input
                  type="text"
                  name="Name"
                  id="name"
                  placeholder="Name"
                  className="regName"
                  value={name}
                  onChange={({ target }) => setName(target.value)}
                />
                <input
                  type="text"
                  name="Username"
                  id="username"
                  placeholder="Username"
                  className="formUsername"
                  value={username}
                  onChange={({ target }) => setUsername(target.value)}
                />
                <input
                  type="password"
                  name="Password"
                  id="password"
                  placeholder="Password"
                  className="formPassword"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                />
                <button>Register</button>
              </form>
            </div>
          )}
        </>
      )}
    </header>
  );
}

export default Header;
