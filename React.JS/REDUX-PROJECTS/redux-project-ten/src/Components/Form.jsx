import React from 'react'
import { Link } from 'react-router-dom'

export const Form = ({btnText,cart,handleEvent,handleChangeEvent}) => {
  return (
    <div  className='container'>
<form>

<div className="mb-3">
    <label htmlFor="id" className="form-label">ID</label>
    <input type="text" className="form-control" name="id" value={cart.id} onChange={(e)=>{handleChangeEvent(e)}}  />
</div>

<div className="mb-3">
    <label htmlFor="userId" className="form-label">USER ID</label>
    <input type="text" className="form-control" name="userId" value={cart.userId} onChange={(e)=>{handleChangeEvent(e)}}  />
</div>

<div className="mb-3">
    <label htmlFor="date" className="form-label">DATE</label>
    <input type="text" className="form-control" name="date" value={cart.date} onChange={(e)=>{handleChangeEvent(e)}}   />
</div>

<div className="mb-3">
    <label htmlFor="products.productId" className="form-label">PRODUCT ID</label>
    <input type="text" className="form-control" name="products.productId" value={cart.products.productId} onChange={(e)=>{handleChangeEvent(e)}}   />
</div>

<div className="mb-3">
    <label htmlFor="products.quantity" className="form-label">QUANTITY</label>
    <input type="text" className="form-control" name="products.quantity" value={cart.products.quantity} onChange={(e)=>{handleChangeEvent(e)}}   />
</div>



<button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>

<Link to="/" className='btn btn-primary' style={{marginLeft:"30px"}}>Cancel</Link>

</form>
    </div>
  )
}
