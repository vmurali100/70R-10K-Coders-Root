/* eslint-disable eqeqeq */
import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export const Edit = () => {
  const urlObj = useParams();
  const navigate = useNavigate();
  let url = "http://localhost:3000/filltext1/";

  const info = JSON.parse(localStorage.getItem("Users"))
  const response = info.find((std)=> std.id == urlObj.id)
  

  const [users, setUsers] = useState(response);
  const { id,fname, lname, tel, address, city, state, zip } = users;

  const handleChange = (e) => {
    let newUsers = { ...users };
    newUsers[e.target.name] = e.target.value;
    setUsers(newUsers);
  };

  const updateUsers = () => {
    axios.put(url + urlObj.id, users).then(() => {
      navigate("/");

    });
  };

  return (
    <div className="container">
      <h2>Edit Comments</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">ID :</label>
          <input
            type="text"
            name="id"
            value={id}
            onChange={(e) => {
              handleChange(e);
            }}
          />{" "}
          <br />
        </div>
        <div className="mb-3">
          <label className="form-label">fname</label>
          <input
            type="text"
            className="form-control"
            name="fname"
            value={fname}
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
            value={lname}
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
            value={tel}
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
            value={address}
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
            value={city}
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
            value={state}
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
            value={zip}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={updateUsers}>
          Update Comments
        </button>
      </form>
    </div>
  );
};
