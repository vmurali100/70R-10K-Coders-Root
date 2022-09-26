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
    <label htmlFor="exampleInputPassword1" className="form-label">Title</label>
    <input type="text" className="form-control" name="title" value={user.title} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
    <input type="text" className="form-control" name="price" value={user.price} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" name="description" value={user.description} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
    <input type="text" className="form-control" name="category" value={user.category} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
    <input type="text" className="form-control" name="image" value={user.image} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  
  
  <button type="submit" className="btn btn-primary" onClick={handleEvent}>{btnTxt}</button>
  <Link to='/' className="btn btn-primary" style={{marginLeft:"20px"}}>
  Cancel
  </Link>
</form>
    </div>
  )
}
