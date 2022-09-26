import React from 'react'
import {Link}  from 'react-router-dom'
export const UserForm = ({btnTxt,handleEvent,handleChangeEvent,user}) => {
  return (
    <div>
        <form>  
        

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Id</label>
    <input type="text" className="form-control" name="id" value={user.id} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
    <input type="text" className="form-control" name="email" value={user.email} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Username</label>
    <input type="text" className="form-control" name="username" value={user.username} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="text" className="form-control" name="password" value={user.password} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
    <input type="text" className="form-control" name="phone" value={user.phone} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">City</label>
    <input type="text" className="form-control" name="city" value={user.city} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Street</label>
    <input type="text" className="form-control" name="street" value={user.street} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Number</label>
    <input type="text" className="form-control" name="number" value={user.number} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Zipcode</label>
    <input type="text" className="form-control" name="zipcode" value={user.zipcode} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleEvent}>{btnTxt}</button>
  <Link to='/' className="btn btn-primary" style={{marginLeft:"20px"}}>
  Cancel
  </Link>
</form>
    </div>
  )
}
