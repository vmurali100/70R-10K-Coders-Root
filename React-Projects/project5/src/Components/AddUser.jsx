import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AddUser = () => {
  const [user, setuser] = useState({
    id: "",
    profile: "",
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: "",
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
      navigate("/Users");
      getDataFromServer();
    });
  };
  const clearForm = () => {
    setuser({
        id: "",
        profile: "",
            name: "",
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
            message: "",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const { id,image, name, username, email, password, confirmpassword, message } =
    user;
  return (
    <div className="p-3 mb-2 bg-secondary text-white">
      <div className="w-75 mx-auto shadow p-5">
        <h1>Registration Form</h1>

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
            <label htmlFor="file" accept="image/*" className="col-form-label">
            Profile
            </label>
            <input
              type="file" accept="image/*" 
              className="form-control form-control-lg"
              placeholder=""
              name="image"
              value={image}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="name"
              value={name}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            User  Name
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
              Email
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder=""
              name="email"
              value={email}
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
             Confirm Password
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="confirmpassword"
              value={confirmpassword}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="textarea" className="col-form-label">
            Message
            </label>
            <textarea
             cols="30" rows="2" 
              className="form-control form-control-lg"
              placeholder=""
              name="message"
              value={message}
              onChange={(e) => {
                handleChange(e);
              }}
            ></textarea>
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
