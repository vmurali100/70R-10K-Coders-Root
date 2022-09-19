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
              First Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="fname"
              value={user.fname}
              onChange={(e) => {
                handlechangeEvent(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="lname"
              value={user.lname}
              onChange={(e) => {
                handlechangeEvent(e);
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
              value={user.dateofbirth}
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
              Mobile Number
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="mobilenumber"
              value={user.mobilenumber}
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
