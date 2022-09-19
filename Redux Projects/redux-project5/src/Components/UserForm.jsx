import React from 'react'
import { Link } from 'react-router-dom'

export const UserForm = ({btnText,handleEvent,handlechangeEvent,user}) => {
  return (
    <div className='container'> 
        <div className="w-75 mx-auto shadow p-5">
    <h1>Products Form</h1>

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
            <label htmlFor="" className="col-form-label">
            Price
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="price"
              value={user.price}
              onChange={(e) => {
                handlechangeEvent(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="textarea" className="col-form-label">
             Description
            </label>
            <textarea
             cols="30" rows="2"
              className="form-control form-control-lg"
              placeholder=""
              name="description"
              value={user.description}
              onChange={(e) => {
                handlechangeEvent(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
             Category
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="category"
              value={user.category}
              onChange={(e) => {
                handlechangeEvent(e);
              }}
            />
          </div>

          <div  className="form-group">
            <label htmlFor=" " className="col-form-label" >
            Image
            </label>
            <input
              type="file"
             
              className="form-control form-control-lg"
              name="image"
              accept="image/png,image/jpeg"
              
              onChange={(e) => {
                handlechangeEvent(e);
              }} 
            /><img style={{ width: 60, height: 60 }} src={user.image} />
             {/* <img style= {{width:100,height:100}} src={"http://localhost:4000/user/"+user.image}/> */}
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
             Rate
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="rate"
              value={user.rating.rate}
              onChange={(e) => {
                handlechangeEvent(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
             Count
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="count"
              value={user.rating.count}
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
