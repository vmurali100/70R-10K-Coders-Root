/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  const hadleLogin = () => {
    setError("");
    setUsername("");
    setPassword("");
    // it helps to perform sending and receiving the data from current api
    axios({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      data: {
        username: username,
        password: password,
      },
    })
      .then((res) => {
        console.log(res.data.token);
        setToken(res.data.token);
        localStorage.setItem("userToken", res.data.token);
      })
      .catch((err) => {
        console.log(err.response.date);
        setError(err.response.data);
      });
  };
  return (
    <div className="container log" style={{ marginTop: "15px" }}>
      <form>
        <div className="container">
          <label className="form-label username">Username :</label>
          <input
            type="text"
            className="form-control"
            placeholder="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="container">
          <label className="form-label"> Password :</label>
          <input
            type="password"
            className="form-control"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {error && <small style={{ color: "red" }}>{error}</small>}
        <div className="container">
          <Link
            type="button"
            className="btn btn-primary"
            style={{ marginTop: "15px" }}
            onClick={hadleLogin}
          >
            LOGIN
          </Link>
        </div>
        <br />
      </form>
    </div>
  );
};
