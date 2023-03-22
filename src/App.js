import { useState, useEffect } from "react";
import axios from "axios"
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [responseData, setResponseData] = useState({});

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(process.env.REACT_APP_API_URL, {
      username,
      password,
    })
      .then(response => {
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        setResponseData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('token')
    setResponseData({})
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setResponseData({ token });
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h3>Ingresar</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
        {responseData.token && (
          <div>
            <p>Nombre de la empresa: {responseData.persona.nombres}</p>
            <p>Direccion de la empresa: {responseData.persona.direccion}</p>
            <button onClick={handleLogout}>x</button>
          </div>
        )}
      </header>
    </div>
  )
}

export default App;