import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AddUser = () => {
  const [user, setuser] = useState({
    address:{geolocation:
      {lat:"",
      long:""},
    city:"",street:" ",
    number:"",zipcode:""},
    id:"",
    email:"",
    username:"",
    password:"",
    name:{firstname:"",lastname:""},
    phone:"",__v:""
  });
  const [users, setusers] = useState([]);
  const navigate = useNavigate();
  let url = "http://localhost:4005/user";
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
    let url = "http://localhost:4005/user";
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
      address:{geolocation:
        {lat:"",
        long:""},
      city:"",street:" ",
      number:"",zipcode:""},
      id:"",
      email:"",
      username:"",
      password:"",
      name:{firstname:"",lastname:""},
      phone:"",__v:""
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const { id,address,geolocation,lat,long,city,street,number,zipcode, name,firstname,lastname, username, email, password, phone, __v } =
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
        <label htmlFor="" className="col-form-label">
         First Name
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="firstname"
          value={firstname}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="" className="col-form-label">
        Last  Name
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="name.lastname"
          value={lastname}
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
          Phone
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="phone"
          value={phone}
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
          Zipcode
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="address.zipcode"
          value={zipcode}
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
          name="address.city"
          value={city}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="" className="col-form-label">
          Street
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="address.street"
          value={street}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="" className="col-form-label">
          St Number
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="address.number"
          value={number}
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
