import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AddUser = () => {
  const [user, setuser] = useState({
    id: "",
    email: "",
    username: "",
    password: "",
    address: {
      streetAddress: "",
      city: "",
      state: "",
      zip: "",
    },
  });
  const [users, setusers] = useState([]);
  const navigate = useNavigate();
  let url = "http://localhost:4000/nestedusers/";
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
    let url = "http://localhost:4000/nestedusers/";
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
      email: "",
      username: "",
      password: "",
      address: {
        streetAddress: "",
        city: "",
        state: "",
        zip: "",
      },
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const {
    id,
    email,
    username,
    password,
    address,
    streetAddress,
    city,
    state,
    zip,
  } = user;
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
              Street Address
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="streetAddress"
              value={address.streetAddress}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="" className="col-form-label">
              City
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="city"
              value={address.city}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
              State
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="state"
              value={address.state}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
              Zip Code
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="zip"
              value={address.zip}
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
