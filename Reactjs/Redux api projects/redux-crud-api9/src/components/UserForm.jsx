import React from 'react'
import {Link}  from 'react-router-dom'
export const UserForm = ({btnTxt,handleEvent,handleChangeEvent,user}) => {
  return (
    <div>
        <form>
  
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">UserId</label>
    <input type="text" className="form-control" name="userId" value={user.userId} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Id</label>
    <input type="text" className="form-control" name="id" value={user.id} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Title</label>
    <input type="text" className="form-control" name="title" value={user.title} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  
  
  <button type="submit" className="btn btn-primary" onClick={handleEvent}>{btnTxt}</button>
  <Link to='/' className="btn btn-primary" style={{marginLeft:"20px"}}>
  Cancel
  </Link>
</form>
    </div>
  )
}
