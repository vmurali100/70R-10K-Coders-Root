import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Create = () => {
  

  const [user, setuser] = useState({
    fname: "",
    lname: "",
    tel: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const navigate = useNavigate();
  let url = "http://localhost:3000/filltext1/";
  const handleChange = (e) => {
    let newUsers = { ...user };
    newUsers[e.target.name] = e.target.value;
    setuser(newUsers);
  };
  const AddUser = () => {
    axios.post(url, user).then(() => {
      navigate("/");
    });
    
  };
  return (
    <div className="container">
      <form>
      <div className="mb-3">
          <label className="form-label">id</label>
          <input
            type="text"
            className="form-control"
            name="id"
            value={user.id}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">fname</label>
          <input
            type="text"
            className="form-control"
            name="fname"
            value={user.fname}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">lname</label>
          <input
            type="text"
            className="form-control"
            name="lname"
            value={user.lname}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">tel</label>
          <input
            type="text"
            className="form-control"
            name="tel"
            value={user.tel}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={user.address}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">city</label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={user.city}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">state</label>
          <input
            type="text"
            className="form-control"
            name="state"
            value={user.state}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">zip</label>
          <input
            type="text"
            className="form-control"
            name="zip"
            value={user.zip}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={AddUser}>
          Add
        </button>
      </form>
    </div>
  );
};
