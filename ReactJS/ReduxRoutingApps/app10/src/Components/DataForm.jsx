import React from 'react'
import { Link } from 'react-router-dom'

export const DataForm = ({btnTxt, mem, handlechange, handleEvent, handleAddressChange}) => {
  return (
    <div>
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Id:</label>
    <input type="email" className="form-control" name="id" value={mem.id} onChange={(e)=>{handlechange(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
    <input type="email" className="form-control" name="email" value={mem.email} onChange={(e)=>{handlechange(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Username:</label>
    <input type="email" className="form-control" name="username" value={mem.username} onChange={(e)=>{handlechange(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Password:</label>
    <input type="email" className="form-control" name="password" value={mem.password} onChange={(e)=>{handlechange(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="city" className="form-label">City:</label>
    <input type="text" className="form-control" name="city" value={mem.address.city} onChange={(e)=>{handleAddressChange(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="state" className="form-label">State:</label>
    <input type="text" className="form-control" name="state" value={mem.address.state} onChange={(e)=>{handleAddressChange(e)}}/>
  </div>
  
  <button type="button" className="btn btn-primary" onClick={handleEvent}>{btnTxt}</button>
  <Link to={'/'} style={{marginLeft:"10px"}} className='btn btn-primary'>Cancel</Link>
</form>
    </div>
  )
}
