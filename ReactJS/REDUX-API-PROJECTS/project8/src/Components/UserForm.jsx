import React from 'react'
import { Link } from 'react-router-dom'

export const UserForm = ({btnText, handleEvent, handleChangeEvent, photo}) => {
  return (
    <div>
        <form>
                
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input type="id" className="form-control" name="id" value={photo.id} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="albumId" className="form-label">albumId</label>
                    <input type="albumId" className="form-control" name="albumId" value={photo.albumId} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="title" className="form-control" name="title" value={photo.title} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>

                <div className="mb-3">
                    <label htmlFor="url" className="form-label">url</label>
                    <input type="url" className="form-control" name="url" value={photo.url} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="thumbnailUrl" className="form-label">thumbnailUrl</label>
                    <input type="thumbnailUrl" className="form-control" name="thumbnailUrl" value={photo.thumbnailUrl} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
            
                <button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>
                <Link to="/" className="btn btn-primary" style={{marginLeft:"20px"}}>
                Cancel
                </Link>
            </form>
    </div>
  )
}
