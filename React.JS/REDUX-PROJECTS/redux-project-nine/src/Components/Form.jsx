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
    <label htmlFor="username" className="form-label">USER NAME</label>
    <input type="text" className="form-control" name="username" value={filltext.username} onChange={(e)=>{handleChangeEvent(e)}}  />
</div>

<div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="text" className="form-control" name="email" value={filltext.email} onChange={(e)=>{handleChangeEvent(e)}}   />
</div>

<div className="mb-3">
    <label htmlFor="password" className="form-label">PASSWORD</label>
    <input type="text" className="form-control" name="password" value={filltext.password} onChange={(e)=>{handleChangeEvent(e)}}   />
</div>



<button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>

<Link to="/" className='btn btn-primary' style={{marginLeft:"30px"}}>Cancel</Link>

</form>
    </div>
  )
}
