import React from 'react'
import { Link } from 'react-router-dom'

export const Form = ({btnTxt,handleEvent,handleChangeEvent,post}) => {
  return (
    <div className='container'>
    <form>
  <div className="mb-3">
    <label  className="form-label">UserId:</label>
    <input type="email" className="form-control" id="userId" value={post.userId} onChange={(e)=>{handleChangeEvent(e)}} name='userId' />    
  </div>
  <div className="mb-3">
    <label  className="form-label">Id:</label>
    <input type="input" className="form-control" name="id" value={post.id} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Title:</label>
    <input type="input" className="form-control" name="title" value={post.title} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Body:</label>
    <input type="input" className="form-control" name="body" value={post.body} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  
  <button type="button" className="btn btn-primary" onClick={handleEvent} >{btnTxt}</button>
  <Link to={'/posts'}><button type="button" className='btn btn-primary' style={{ marginLeft: '10px' }}>Cancel</button></Link>
</form>
    </div>
  )
}
