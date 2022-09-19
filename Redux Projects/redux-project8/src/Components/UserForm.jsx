import React from 'react'
import { Link } from 'react-router-dom'

export const UserForm = ({btnText,handleEvent,handlechangeEvent,user}) => {
  return (
    <div className='container'> 
        <div className="w-75 mx-auto shadow p-5">
    <h1>Details Form</h1>

    <hr /><form >
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
            <label htmlFor="file" className="col-form-label">
            Profile
            </label>
            <input
              type="file" accept="image/*" 
              className="form-control form-control-lg"
              placeholder=""
              name="profile"
              value={user.profile}
              onChange={(e) => {
                handlechangeEvent(e);
              }}
            /><img style={{ width: 60, height: 60 }} src={user.profile} />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="name"
              value={user.name}
              onChange={(e) => {
                handlechangeEvent(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            User  Name
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
             Confirm Password
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="confirmpassword"
              value={user.confirmpassword}
              onChange={(e) => {
                handlechangeEvent(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="textarea" className="col-form-label">
            Message
            </label>
            <textarea
             cols="30" rows="2" 
              className="form-control form-control-lg"
              placeholder=""
              name="message"
              value={user.message}
              onChange={(e) => {
                handlechangeEvent(e);
              }}
            ></textarea>
          </div>
      <br />
      <button
        onClick={handleEvent}
        type="button"
        className="btn btn-primary"
      >
       {btnText}
      </button>
      <Link to="/" className="btn btn-info" style={{marginLeft:"25px"}}> Cancel</Link>
    </form></div>
    </div>
  )
}
