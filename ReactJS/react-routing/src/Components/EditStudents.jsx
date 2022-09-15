/* eslint-disable eqeqeq */
import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const EditStudents = () => {
  const urlObj = useParams();
  const navigate = useNavigate();
  let url = "http://localhost:3000/Students/";

  const student = JSON.parse(localStorage.getItem("Students"))
  const response = student.find((std)=>std.id == urlObj.id)

  const [students, setstudents] = useState(response);
  const { id, name, username, email } = students;



  const handleChange = (e) => {
    let newStudents = { ...students };
    newStudents[e.target.name] = e.target.value;
    setstudents(newStudents);
  };

  const updateStudents = () => {
   axios.put(url+urlObj.id,students).then(()=>{
    navigate("/")
    console.log()
   })
  };
 
  return (
    <div className="container">
      <h2>Edit Students</h2>
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
          onClick={updateStudents}
        >
          Update Students
        </button>
      </form>
    </div>
  );
};
