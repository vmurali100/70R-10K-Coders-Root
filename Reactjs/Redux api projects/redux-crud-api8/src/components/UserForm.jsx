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
    <label htmlFor="exampleInputPassword1" className="form-label">Quantity</label>
    <input type="text" className="form-control" name="quantity" value={user.quantity} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Total</label>
    <input type="text" className="form-control" name="total" value={user.total} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">DiscountPercentage</label>
    <input type="text" className="form-control" name="discountedPercentage" value={user.discountedPercentage} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">DiscountedPrice</label>
    <input type="text" className="form-control" name="discountedPrice" value={user.discountedPrice} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleEvent}>{btnTxt}</button>
  <Link to='/' className="btn btn-primary" style={{marginLeft:"20px"}}>
  Cancel
  </Link>
</form>
    </div>
  )
}
