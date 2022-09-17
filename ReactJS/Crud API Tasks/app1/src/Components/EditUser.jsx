/* eslint-disable eqeqeq */
import React,{useState} from 'react'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export const EditUser = () => {
  const urlObj = useParams();
  const navigate = useNavigate();
  let url = "http://localhost:3000/users/";

  const student = JSON.parse(localStorage.getItem("Students"))
  const response = student.find((std)=>std.id == urlObj.id)

  const [users, setusers] = useState(response);
  const { id, email, username,password  } = users;



  const handleChange = (e) => {
    let newUser = { ...users };
    newUser[e.target.name] = e.target.value;
    setusers(newUser);
  };

  const updateStudents = () => {
   axios.put(url+urlObj.id,users).then(()=>{
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
          <label className="form-label">Password</label>
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
        <button
          type="button"
          className="btn btn-primary"
          onClick={updateStudents}
        >
          Update Students
        </button>
      </form>
    </div>
  )
}
