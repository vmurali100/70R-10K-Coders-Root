import React from 'react'
import { Link } from 'react-router-dom'

export const PhotoForm = ({btnTxt, photo, handleChangeEvent, handleEvent}) => {
  return (
    <div className='container'>
    <form>
    <div className="mb-3">
    <label  className="form-label">AlbumId:</label>
    <input type="input" className="form-control" id="albumId" name="albumId" value={photo.albumId} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Id:</label>
    <input type="input" className="form-control" id="id" name="id" value={photo.id} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>  
  <div className="mb-3">
    <label  className="form-label">Title:</label>
    <input type="input" className="form-control" id="title" name="title" value={photo.title} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Url:</label>
    <input type="input" className="form-control" id="url" name="url" value={photo.url} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label  className="form-label">ThumbnailUrl:</label>
    <input type="input" className="form-control" id="thumbnailUrl" name="thumbnailUrl" value={photo.thumbnailUrl} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  
  <button type="button" className="btn btn-primary" onClick={handleEvent} >{btnTxt}</button>
  <Link to={'/'}><button type="button" className='btn btn-primary' style={{ marginLeft: '10px' }}>Cancel</button></Link>
</form>
    </div>
  )
}
