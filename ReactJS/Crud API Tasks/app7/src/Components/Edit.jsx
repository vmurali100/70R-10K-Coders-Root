/* eslint-disable eqeqeq */
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export const Edit = () => {
  let url = "http://localhost:3007/users/";
  const navigate = useNavigate();
  const UrlEdit = useParams();

  const data = JSON.parse(localStorage.getItem("UserInfo"));
  const response = data.find((users) => users.id == UrlEdit.id);
  const [users, setusers] = useState(response);

  const handleChange = (e) => {
    let newusers = { ...users };
    newusers[e.target.name] = e.target.value;
    setusers(newusers);
  };

  const updateTodos = () => {
    axios.put(url + UrlEdit.id, users).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="container" style={{textAlign:"center",marginTop:"20px"}}>
      <form>
        <div className="mb-3">
          <label className="form-label">Id</label>
          <input
            type="text"
            className="form-control"
            name="id"
            value={users.id}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={users.name}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={users.username}
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
            value={users.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={updateTodos}>
          Update
        </button>
        <div className="mb-3">
          <Link
            to="/"
            className="btn btn-primary"
            style={{ marginTop: "20px" }}
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};
