import React from 'react'
import { Link } from 'react-router-dom'

export const CommentForm = ({btnTxt,handleEvent,handleChangeEvent,cmnt}) => {
  return (
    <div className='container'>
    <form>
  <div className="mb-3">
    <label  className="form-label">PostId:</label>
    <input type="input" className="form-control" id="postId" value={cmnt.postId} onChange={(e)=>{handleChangeEvent(e)}} name='postId' />    
  </div>
  <div className="mb-3">
    <label  className="form-label">Id:</label>
    <input type="input" className="form-control" id="id" name="id" value={cmnt.id} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Name:</label>
    <input type="input" className="form-control" id="name" name="name" value={cmnt.name} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Email:</label>
    <input type="input" className="form-control" id="email" name="email" value={cmnt.email} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Body:</label>
    <input type="input" className="form-control" id="body" name="body" value={cmnt.body} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  
  <button type="button" className="btn btn-primary" onClick={handleEvent} >{btnTxt}</button>
  <Link to={'/'}><button type="button" className='btn btn-primary' style={{ marginLeft: '10px' }}>Cancel</button></Link>
</form>
    </div>
  )
}
