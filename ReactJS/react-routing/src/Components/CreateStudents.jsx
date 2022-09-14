import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateStudents = () => {
  const [students, setstudents] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
  });
  const { id, name, username, email } = students;
  const navigate = useNavigate();
  const submitStudents = () => {
    axios.post("http://localhost:3000/Students/", students).then(() => {
      navigate("/");
    });
  };
  const handleChange = (e) => {
    let newStudents = { ...students };
    newStudents[e.target.name] = e.target.value;
    setstudents(newStudents)
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
          <label className="form-label">NAME</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
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
          <label className="form-label">EMAIL</label>
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
        <button
          type="button"
          className="btn btn-primary"
          onClick={submitStudents}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
