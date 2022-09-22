import React from 'react'
import { Link } from 'react-router-dom'

export const Form = ({btnText,filltext,handleEvent,handleChangeEvent}) => {
  return (
    <div  className='container'>
         <form>

<div className="mb-3">
    <label htmlFor="id" className="form-label">ID</label>
    <input type="text" className="form-control" name="id" value={filltext.id} onChange={(e)=>{handleChangeEvent(e)}}  />
</div>

<div className="mb-3">
    <label htmlFor="fname" className="form-label">FNAME</label>
    <input type="text" className="form-control" name="fname" value={filltext.fname} onChange={(e)=>{handleChangeEvent(e)}}  />
</div>

<div className="mb-3">
    <label htmlFor="lname" className="form-label">LNAME</label>
    <input type="text" className="form-control" name="lname" value={filltext.lname} onChange={(e)=>{handleChangeEvent(e)}}   />
</div>

<div className="mb-3">
    <label htmlFor="tel" className="form-label">TELEPHONE</label>
    <input type="text" className="form-control" name="tel" value={filltext.tel} onChange={(e)=>{handleChangeEvent(e)}}   />
</div>

<div className="mb-3">
    <label htmlFor="address" className="form-label">ADDRESS</label>
    <input type="text" className="form-control" name="address" value={filltext.address} onChange={(e)=>{handleChangeEvent(e)}}   />
</div>

<div className="mb-3">
    <label htmlFor="city" className="form-label">CITY</label>
    <input type="text" className="form-control" name="city" value={filltext.city} onChange={(e)=>{handleChangeEvent(e)}}   />
</div>

<div className="mb-3">
    <label htmlFor="state" className="form-label">STATE</label>
    <input type="text" className="form-control" name="state" value={filltext.state} onChange={(e)=>{handleChangeEvent(e)}}   />
</div>

<div className="mb-3">
    <label htmlFor="zip" className="form-label">ZIP</label>
    <input type="text" className="form-control" name="zip" value={filltext.zip} onChange={(e)=>{handleChangeEvent(e)}}   />
</div>

<button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>

<Link to="/" className='btn btn-primary' style={{marginLeft:"30px"}}>Cancel</Link>

</form>
    </div>
  )
}
