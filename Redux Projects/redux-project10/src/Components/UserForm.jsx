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
              Registration Number
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="regno"
              value={user.regno}
              onChange={(e) => {
                handlechangeEvent(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            University
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder=""
              name="university"
              value={user.university}
              onChange={(e) => {
                handlechangeEvent(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            Institute
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="institute"
              value={user.institute}
              onChange={(e) => {
                handlechangeEvent(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            Branch
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="branch"
              value={user.branch}
              onChange={(e) => {
                handlechangeEvent(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            Degree
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="degree"
              value={user.degree}
              onChange={(e) => {
                handlechangeEvent(e);
              }}
            />
          </div>

         
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
             Average CGPA
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="avgcgpa"
              value={user.avgcgpa}
              onChange={(e) => {
                handlechangeEvent(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            Experience
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="experience"
              value={user.experience}
              onChange={(e) => {
                handlechangeEvent(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
             Website/Blog
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="blog"
              value={user.blog}
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
