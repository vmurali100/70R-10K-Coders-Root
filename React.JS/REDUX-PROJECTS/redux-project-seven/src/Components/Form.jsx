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

<button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>

<Link to="/" className='btn btn-primary' style={{marginLeft:"30px"}}>Cancel</Link>

</form>
    </div>
  )
}
