import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Create = () => {
  const [todos, settodos] = useState({
    userId: "",
    id: "",
    title: "",
    completed:""
  });
  let url = "http://localhost:3006/todos/";
  const navigate = useNavigate();

  const handleChange = (e) => {
    let newphotos = { ...todos };
    newphotos[e.target.name] = e.target.value;
    settodos(newphotos);
  };

  const AddTodos = () => {
    axios.post(url, todos).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label className="form-label">User Id</label>
          <input
            type="text"
            className="form-control"
            name="userId"
            value={todos.userId}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Id</label>
          <input
            type="text"
            className="form-control"
            name="id"
            value={todos.id}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={todos.title}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Completed</label>
          <input
            type="text"
            className="form-control"
            name="completed"
            value={todos.completed}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={AddTodos}>
          Add
        </button>
        <div className="mb-3">
          <Link to="/" className="btn btn-primary" style={{marginTop:"20px"}}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};
