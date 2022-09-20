import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const CreateUser = () => {
  const [user, setusers] = useState({
    id: "",
    email: "",
    username: "",
    password: "",
  });
  const { id, email, username, password } = user;
  const navigate = useNavigate();
  const submitUsers = () => {
    axios.post("http://localhost:3000/users/", user).then(() => {
      navigate("/");
    });
  };
  const handleChange = (e) => {
    let newStudents = { ...user };
    newStudents[e.target.name] = e.target.value;
    setusers(newStudents);
  };
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label className="form-label">ID</label>
          <input
            type="text"
            className="form-control"
            name="id"
            value={id}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">USERNAME</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">PASSWORD</label>
          <input
            type="text"
            className="form-control"
            name="password"
            value={password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={submitUsers}>
          Add User
        </button>
        <Link to="/" className="btn btn-primary" style={{ marginLeft: "20px" }}>
          Cancel
        </Link>
      </form>
    </div>
  );
};
