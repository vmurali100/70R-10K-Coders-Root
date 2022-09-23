import React from 'react'

export const ProductForm = ({btnTxt,prod,handlechangeEvent,handleEvent}) => {
  return (
    <div className='container'>
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Id:</label>
    <input type="email" className="form-control" id="id" aria-describedby="emailHelp" name="id" 
    value={prod.id} onChange={(e)=>{handlechangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title:</label>
    <input type="email" className="form-control" id="title" aria-describedby="emailHelp" name="title" value={prod.title} onChange={(e)=>{handlechangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Price:</label>
    <input type="email" className="form-control" id="price" aria-describedby="emailHelp" name="price" value={prod.price} onChange={(e)=>{handlechangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Image:</label>
    <input type="email" className="form-control" id="image" aria-describedby="emailHelp" name="image" value={prod.image} onChange={(e)=>{handlechangeEvent(e)}}/>
  </div>
  {/* <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Id:</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="id" value={prod.id} onChange={(e)=>{handlechangeEvent(e)}}/>
  </div> */}
  <button type="button" className="btn btn-primary" onClick={handleEvent}>{btnTxt}</button>
  <button type="button" className="btn btn-primary" style={{marginLeft:"10px"}}>Cancel</button>
</form>
    </div>
  )
}
