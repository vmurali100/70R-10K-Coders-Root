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
          User ID
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="userId"
          value={user.userId}
          onChange={(e) => {
            handlechangeEvent(e);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="" className="col-form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="title"
          value={user.title}
          onChange={(e) => {
            handlechangeEvent(e);
          }}
        />
      </div>
    
      <div className="form-group">
              <label htmlFor="textarea" className="col-form-label">
                Body
              </label>
              <textarea
                cols="30"
                rows="2"
                className="form-control form-control-lg"
                placeholder=""
                name="body"
                value={user.body}
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
