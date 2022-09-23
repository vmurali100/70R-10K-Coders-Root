import React from 'react'
import { Link } from 'react-router-dom'

export const AlbumsForm = ({btnTxt,albm,handleChangeEvent,handleEvent}) => {
  return (
    <div className='container'>
    <form>
    <div className="mb-3">
    <label  className="form-label">UserId:</label>
    <input type="input" className="form-control" id="userId" name="userId" value={albm.userId} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Id:</label>
    <input type="input" className="form-control" id="id" name="id" value={albm.id} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>  
  <div className="mb-3">
    <label  className="form-label">Title:</label>
    <input type="input" className="form-control" id="title" name="title" value={albm.title} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  
  <button type="button" className="btn btn-primary" onClick={handleEvent} >{btnTxt}</button>
  <Link to={'/'}><button type="button" className='btn btn-primary' style={{ marginLeft: '10px' }}>Cancel</button></Link>
</form>
    </div>
  )
}
