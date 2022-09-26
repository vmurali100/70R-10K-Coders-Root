import React from 'react'
import {Link} from 'react-router-dom'

export const ProdForm = ({prod, handlechange, handleEvent, btnTxt}) => {
  return (
    <div>
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Id:</label>
    <input type="email" className="form-control" id="id" name='id' value={prod.id} onChange={(e)=>{handlechange(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title:</label>
    <input type="email" className="form-control" id="title" name='title' value={prod.title} onChange={(e)=>{handlechange(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Price:</label>
    <input type="email" className="form-control" id="price" name='price' value={prod.price} onChange={(e)=>{handlechange(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Description:</label>
    <input type="email" className="form-control" id="description" name='description' value={prod.description} onChange={(e)=>{handlechange(e)}}/>
  </div>
  <button type="button" className="btn btn-primary" onClick={handleEvent}>{btnTxt}</button>
  <Link><button type="button" className='btn btn-primary' style={{marginLeft:"10px"}}>Cancel</button></Link>
</form>
    </div>
  )
}
