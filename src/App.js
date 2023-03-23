import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { axiosLogin } from "./store/actions/actions";

import './App.css';

function App() {

  // Crea los envios desde el redux actions
  const dispatch = useDispatch();

  // Hooks del username y password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit =   (event) => {
    event.preventDefault();
    dispatch(axiosLogin(username, password))
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </header>
    </div>
  )
}

export default App;