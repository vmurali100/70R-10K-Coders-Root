import React from "react";
import { Link } from "react-router-dom";

export const UserForm = ({ btnText, handleEvent, handlechangeEvent, user }) => {
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h1>Details Form</h1>

        <hr />
        <form>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
              ID
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="id"
              value={user.id}
              onChange={(e) => {
                handlechangeEvent(e);
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
              value={user.email}
              onChange={(e) => {
                handlechangeEvent(e);
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
              value={user.username}
              onChange={(e) => {
                handlechangeEvent(e);
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
              value={user.password}
              onChange={(e) => {
                handlechangeEvent(e);
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
              value={user.address.streetAddress}
              onChange={(e) => {
                handlechangeEvent(e);
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
              value={user.address.city}
              onChange={(e) => {
                handlechangeEvent(e);
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
              value={user.address.state}
              onChange={(e) => {
                handlechangeEvent(e);
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
              value={user.address.zip}
              onChange={(e) => {
                handlechangeEvent(e);
              }}
            />
          </div>

          <br />
          <button
            onClick={handleEvent}
            type="button"
            className="btn btn-primary"
          >
            {btnText}
          </button>
          <Link to="/" className="btn btn-info" style={{ marginLeft: "25px" }}>
            {" "}
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};
