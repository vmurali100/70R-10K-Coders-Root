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
        USER  ID
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
          Date
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="date"
          value={user.date}
          onChange={(e) => {
            handlechangeEvent(e);
          }}
        />
      </div>
     
    
      <div className="form-group">
        <label htmlFor="" className="col-form-label">
          productId
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="productId"
          value={user.products.productId}
          onChange={(e) => {
            handlechangeEvent(e);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="" className="col-form-label">
          Quantity
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="quantity"
          value={user.products.quantity}
          onChange={(e) => {
            handlechangeEvent(e);
          }}
        />
      </div>
     
      <div className="form-group">
        <label htmlFor="" className="col-form-label">
          Version
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="__v"
          value={user.__v}
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
