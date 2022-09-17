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
          Phone
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="phone"
          value={user.phone}
          onChange={(e) => {
            handlechangeEvent(e);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="" className="col-form-label">
          Website
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="website"
          value={user.website}
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
      <Link to="/" className="btn btn-info" style={{marginLeft:"25px"}}> Cancel</Link>
    </form></div>
    </div>
  )
}
