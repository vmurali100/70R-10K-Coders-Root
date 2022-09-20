import React from 'react'
import { Link } from 'react-router-dom'

export const Form = ({btnText,photo,handleChangeEvent,handleEvent}) => {
  return (
    <div className='container'>
      <form>

<div className="mb-3">
    <label htmlFor="id" className="form-label">ID</label>
    <input type="text" className="form-control" name="id" value={photo.id} onChange={(e)=>{handleChangeEvent(e)}}  />
</div>

<div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" name="title" value={photo.title} onChange={(e)=>{handleChangeEvent(e)}}  />
</div>

<div className="mb-3">
    <label htmlFor="url" className="form-label">URL</label>
    <input type="text" className="form-control" name="url" value={photo.url} onChange={(e)=>{handleChangeEvent(e)}}   />
</div>

<div className="mb-3">
    <label htmlFor="thumbnailUrl" className="form-label">Thumbnail URL</label>
    <input type="text" className="form-control" name="thumbnailUrl" value={photo.thumbnailUrl} onChange={(e)=>{handleChangeEvent(e)}}  />
</div>



<button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>

<Link to="/" className='btn btn-primary' style={{marginLeft:"30px"}}>Cancel</Link>
</form>

    </div>
  )
}
