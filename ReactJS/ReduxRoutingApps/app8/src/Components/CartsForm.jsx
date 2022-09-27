import React from 'react'
import {Link} from 'react-router-dom'

export const CartsForm = ({btnTxt, cart, handlechange, handleEvent}) => {
  return (
    <div className='container'>
      <form>
      <div className="mb-3 row">
  <label  className="col-sm-2 col-form-label">Id :</label>
  <div className="col-sm-10">
    <input type="text"  className="form-control" name="id" id="id" value={cart.id} onChange={(e)=>{handlechange(e)}} />
  </div>
</div>
<div className="mb-3 row">
  <label  className="col-sm-2 col-form-label">UserId :</label>
  <div className="col-sm-10">
    <input type="text"  className="form-control" name="userId" id="userId" value={cart.userId} onChange={(e)=>{handlechange(e)}} />
  </div>
</div>
<div className="mb-3 row">
  <label  className="col-sm-2 col-form-label">Date :</label>
  <div className="col-sm-10">
    <input type="text"  className="form-control" name="date" id="date" value={cart.date} onChange={(e)=>{handlechange(e)}} />
  </div>
</div>  
  <button type="button" className="btn btn-primary" onClick={handleEvent}>{btnTxt}</button>
  <Link to={'/'}> <button type="button" className='btn btn-primary'>Cancel</button> </Link>
</form>
    </div>
  )
}
