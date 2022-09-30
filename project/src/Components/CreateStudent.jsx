import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const CreateStudent = () => {
  const [student, setstudent] = useState({
    id: 11,
    name: "sam",
    username: "sammm",
    email: "sam@gmail.com"
  })
  const navigate = useNavigate();

  const submitStudent = () => {
    
      axios.post("http://localhost:3000/users", student).then((res) => {
        setstudent(res.data)
      navigate("/")
    })
  }

  return (
    <div classNameName="container">
      <form><div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Id
          </label>
          <input
            type="id"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
      <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            UserName
          </label>
          <input
            type="username"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          </div>
        
        <button type="button" className="btn btn-primary" onClick={submitStudent}>
          Submit
        </button>
      </form>
    </div>
  );
};
