import React from 'react'
import { Link } from 'react-router-dom'

export const UserForm = ({btnText,handleEvent,handlechangeEvent,user}) => {
  return (
    <div className='container'> 
        <div className="w-75 mx-auto shadow p-5">
    <h1>Album Form</h1>

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
          Album Id
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="albumId"
          value={user.albumId}
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
          Url
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="url"
          value={user.url}
          onChange={(e) => {
            handlechangeEvent(e);
          }}
        />
      </div>
      {/* <div className="form-group">
        <label htmlFor="" className="col-form-label">
          Thumbnail Url
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="thumbnailUrl"
          value={user.thumbnailUrl}
          onChange={(e) => {
            handlechangeEvent(e);
          }}
        />
      </div> */}
      <div  className="form-group">
            <label htmlFor=" " className="col-form-label" >
            Thumbnail Url
            </label>
            <input
              type="file"
             
              className="form-control form-control-lg"
              name="thumbnailUrl"
            
              accept="image/png,image/jpeg"
              
              onChange={(e) => {
                handlechangeEvent(e);
              }} 
            /><img style={{ width: 60, height: 60 }} src={user.thumbnailUrl} />
           
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
