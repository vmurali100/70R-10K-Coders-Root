import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Create = () => {
  const [data, setdata] = useState({
    id: "",
    email: "",
    username: "",
    password: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
  });

  const { id, email, username, password, streetAddress, city, state, zip } =
    data;
  let url = "http://localhost:3008/FetchData/";
  const navigate = useNavigate();

  const handleChange = (e) => {
    let newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setdata(newdata);
  };

  const AddUsers = () => {
    axios.post(url, data).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="container">
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

        <button type="button" className="btn btn-primary" onClick={AddUsers}>
          Add
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
