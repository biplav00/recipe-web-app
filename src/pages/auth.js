import React, { useState } from "react";
import axios from "axios";

const Auth = () => {
  return (
    <div className="auth">
      <Login />
      <Register />
    </div>
  );
};

export default Auth;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3000/auth/register", {
        username,
        password,
      });
      alert("Registered!!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-container">
      <form>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
