import React from 'react'
import {Link} from 'react-router-dom';

export const UserForm = ({btnTxt,user,handleChangeEvent,handleEvent}) => {
  return (
    <div className='container'>
    <form>
    <div className="mb-3">
    <label  className="form-label">Id:</label>
    <input type="input" className="form-control" id="id" name="id" value={user.id} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Name:</label>
    <input type="input" className="form-control" id="name" name="name" value={user.name} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>  
  <div className="mb-3">
    <label  className="form-label">UserName:</label>
    <input type="input" className="form-control" id="username" name="username" value={user.username} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>  
  <div className="mb-3">
    <label  className="form-label">Email:</label>
    <input type="input" className="form-control" id="email" name="email" value={user.email} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Phone:</label>
    <input type="input" className="form-control" id="phone" name="phone" value={user.phone} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Website:</label>
    <input type="input" className="form-control" id="website" name="website" value={user.website} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  
  
  <button type="button" className="btn btn-primary" onClick={handleEvent} >{btnTxt}</button>
  <Link to={'/'}><button type="button" className='btn btn-primary' style={{ marginLeft: '10px' }}>Cancel</button></Link>
</form>
    </div>
  )
}
