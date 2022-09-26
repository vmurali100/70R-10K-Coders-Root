import React from 'react'
import {Link}  from 'react-router-dom'
export const UserForm = ({btnTxt,handleEvent,handleChangeEvent,user}) => {
  return (
    <div>
        <form>  "id": "",
      "fname": "",
      "lname": "",
      "tel": "",
      "address": "",
      "city": "",
      "state": "",
      "zip": ""
  
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Id</label>
    <input type="text" className="form-control" name="id" value={user.id} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">FName</label>
    <input type="text" className="form-control" name="fname" value={user.fname} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">LName</label>
    <input type="text" className="form-control" name="lname" value={user.lname} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Tel</label>
    <input type="text" className="form-control" name="tel" value={user.tel} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control" name="address" value={user.address} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">City</label>
    <input type="text" className="form-control" name="city" value={user.city} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">State</label>
    <input type="text" className="form-control" name="state" value={user.state} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Zip</label>
    <input type="text" className="form-control" name="zip" value={user.zip} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleEvent}>{btnTxt}</button>
  <Link to='/' className="btn btn-primary" style={{marginLeft:"20px"}}>
  Cancel
  </Link>
</form>
    </div>
  )
}
