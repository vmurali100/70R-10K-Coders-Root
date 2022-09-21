import React from 'react'
import { Link } from 'react-router-dom'

export const Form = ({btnText,albums,handleEvent,handleChangeEvent}) => {
  return (
    <div  className='container'>
         <form>

<div className="mb-3">
    <label htmlFor="id" className="form-label">ID</label>
    <input type="text" className="form-control" name="id" value={albums.id} onChange={(e)=>{handleChangeEvent(e)}}  />
</div>

<div className="mb-3">
    <label htmlFor="userId" className="form-label">userId</label>
    <input type="text" className="form-control" name="userId" value={albums.userId} onChange={(e)=>{handleChangeEvent(e)}}  />
</div>

<div className="mb-3">
    <label htmlFor="title" className="form-label">title</label>
    <input type="text" className="form-control" name="title" value={albums.title} onChange={(e)=>{handleChangeEvent(e)}}   />
</div>

<button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>

<Link to="/" className='btn btn-primary' style={{marginLeft:"30px"}}>Cancel</Link>

</form>
    </div>
  )
}
