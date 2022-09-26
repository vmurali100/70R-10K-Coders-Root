import React from 'react'
import {Link}  from 'react-router-dom'
export const UserForm = ({btnTxt,handleEvent,handleChangeEvent,user}) => {
  return (
    <div>
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">AlbumId</label>
    <input type="number" className="form-control" name="albumId" value={user.albumId} onChange={(e)=>{handleChangeEvent(e)}}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Id</label>
    <input type="text" className="form-control" name="id" value={user.id} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Title</label>
    <input type="text" className="form-control" name="title" value={user.title} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">URL</label>
    <input type="text" className="form-control" name="url" value={user.url} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Thumbnailurl</label>
    <input type="text" className="form-control" name="thumbnailurl" value={user.thumbnailurl} onChange={(e)=>{handleChangeEvent(e)}}/>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handleEvent}>{btnTxt}</button>
  <Link to='/' className="btn btn-primary" style={{marginLeft:"20px"}}>
  Cancel
  </Link>
</form>
    </div>
  )
}
