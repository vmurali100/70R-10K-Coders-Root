import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AddUser = () => {
  const [user, setuser] = useState({
    id:"",
    regno:"",
    university: "",
    institute: "",
    branch: "",
    degree: "",
    avgcgpa: "",
    experience: "",
    blog: ""
    
  });
  const [users, setusers] = useState([]);
  const navigate = useNavigate();
  let url = "http://localhost:4000/user";
  useEffect(() => {
    getDataFromServer();
  }, []);
  const getDataFromServer = () => {
    axios.get(url).then((response) => {
      console.log(response);
      setusers(response.data);
    });
  };
  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setuser(newUser);
  };
  const addUser = () => {
    let url = "http://localhost:4000/user";
    axios.post(url, user).then(() => {
      console.log("user added successfully");

      alert("User Added successfully");

      clearForm();
      navigate("/Students");
      getDataFromServer();
    });
  };
  const clearForm = () => {
    setuser({
        id:"",
        regno:"",
        university: "",
        institute: "",
        branch: "",
        degree: "",
        avgcgpa: "",
        experience: "",
        blog: ""
        
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const { id, regno, university, institute, branch,degree,avgcgpa,experience,blog }= user;
  return (
    <div className="p-3 mb-2 bg-secondary text-white">
      <div className="w-75 mx-auto shadow p-5">
        <h1>User Registration Form</h1>

        <hr />
        <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="" className="col-form-label">
              ID
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="id"
              value={id}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
              Registration Number
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="regno"
              value={regno}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            University
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder=""
              name="university"
              value={university}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            Institute
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="institute"
              value={institute}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            Branch
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="branch"
              value={branch}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            Degree
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="degree"
              value={degree}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

         
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
             Average CGPA
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="avgcgpa"
              value={avgcgpa}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            Experience
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="experience"
              value={experience}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
             Website/Blog
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="blog"
              value={blog}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <br />
          <button
            onClick={addUser}
            type="button"
            style={{ color: "yellow", background: "black" }}
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};
