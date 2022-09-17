import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AddUser = () => {
  const [user, setuser] = useState({
    id:"",
    username: "",
    password: "",
    emailaddress: "",
    gender: "",
    dateofbirth: "",
    height: "",
    weight: ""
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
      navigate("/Subscribers");
      getDataFromServer();
    });
  };
  const clearForm = () => {
    setuser({
        id:"",
        username: "",
        password: "",
        emailaddress: "",
        gender: "",
        dateofbirth: "",
        height: "",
        weight: ""
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const {id, username, password, emailaddress, gender, dateofbirth, height,weight} = user;
  return (
    <div className="p-3 mb-2 bg-secondary text-white">
      <div className="w-75 mx-auto shadow p-5">
        <h1>Student Registration Form</h1>

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
              User Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="username"
              value={username}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
             Password
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="password"
              value={password}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder=""
              name="emailaddress"
              value={emailaddress}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            Gender
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="gender"
              value={gender}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
              Date Of Birth
            </label>
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Select Your Date Of Birth"
              name="dateofbirth"
              value={dateofbirth}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            Height
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="height"
              value={height}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            Weight
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="weight"
              value={weight}
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
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};
