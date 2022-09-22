import React from 'react'
import { Link } from 'react-router-dom'

export const Form = ({btnText,product,handleEvent,handleChangeEvent}) => {
  return (
    <div  className='container'>
<form>

<div className="mb-3">
    <label htmlFor="id" className="form-label">ID</label>
    <input type="text" className="form-control" name="id" value={product.id} onChange={(e)=>{handleChangeEvent(e)}}  />
</div>

<div className="mb-3">
    <label htmlFor="title" className="form-label">TITLE</label>
    <input type="text" className="form-control" name="title" value={product.title} onChange={(e)=>{handleChangeEvent(e)}}  />
</div>

<div className="mb-3">
    <label htmlFor="price" className="form-label">PRICE</label>
    <input type="text" className="form-control" name="price" value={product.price} onChange={(e)=>{handleChangeEvent(e)}}   />
</div>

<div className="mb-3">
    <label htmlFor="description" className="form-label">DESCRIPTION</label>
    <input type="text" className="form-control" name="description" value={product.description} onChange={(e)=>{handleChangeEvent(e)}}   />
</div>

<div className="mb-3">
    <label htmlFor="category" className="form-label">CATEGORY</label>
    <input type="text" className="form-control" name="category" value={product.category} onChange={(e)=>{handleChangeEvent(e)}}   />
</div>

<div className="mb-3">
    <label htmlFor="image" className="form-label">IMAGE</label>
    <input type="text" className="form-control" name="image" value={product.image} onChange={(e)=>{handleChangeEvent(e)}}   />
</div>


<button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>

<Link to="/" className='btn btn-primary' style={{marginLeft:"30px"}}>Cancel</Link>

</form>
    </div>
  )
}
