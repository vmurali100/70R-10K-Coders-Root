/* eslint-disable eqeqeq */
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export const Edit = () => {
  let url = "http://localhost:3008/FetchData/";
  const navigate = useNavigate();
  const UrlEdit = useParams();

  const user = JSON.parse(localStorage.getItem("DataInfo"));
  const response = user.find((users) => users.id == UrlEdit.id);
  const [users, setusers] = useState(response);

  const { id, email, username, password, streetAddress, city, state, zip } = users;
  const handleChange = (e) => {
    let newusers = { ...users };
    newusers[e.target.name] = e.target.value;
    setusers(newusers);
  };

  const updateData = () => {
    axios.put(url + UrlEdit.id, users).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="container" style={{textAlign:"center",marginTop:"20px"}}>
      <form>
      <div className="mb-3">
          <label className="form-label">Id</label>
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
          <label className="form-label">Username</label>
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
        <div className="mb-3">
          <label className="form-label">StreetAddress</label>
          <input
            type="text"
            className="form-control"
            name="streetAddress"
            value={streetAddress}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
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
          <label className="form-label">State</label>
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
          <label className="form-label">Zip</label>
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
        <button type="button" className="btn btn-primary" onClick={updateData}>
          Update
        </button>
        <div className="mb-3">
          <Link
            to="/"
            className="btn btn-primary"
            style={{ marginTop: "20px" }}
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};
