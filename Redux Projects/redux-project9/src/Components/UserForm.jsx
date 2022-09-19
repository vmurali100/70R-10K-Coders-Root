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
              Email Address
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder=""
              name="emailaddress"
              value={user.emailaddress}
              onChange={(e) => {
                handlechangeEvent(e);
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
              value={user.gender}
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
              Height
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="height"
              value={user.height}
              onChange={(e) => {
                handlechangeEvent(e);
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
              value={user.weight}
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
