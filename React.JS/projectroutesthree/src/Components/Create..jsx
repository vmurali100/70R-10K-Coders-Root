import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CreatePhotos = () => {

    const [photos, setphotos] = useState({
        id : "",
        title : "",
        url : "",
        thumbnailUrl : ""
    });

     const navigate = useNavigate()

    let url = "http://localhost:3201/photos"

    const handleChange=(e)=>{
        let newPhotos = {...photos}
        newPhotos[e.target.name] = e.target.value;
        setphotos(newPhotos)
    }

    const addPhoto=()=>{
        axios.post(url,photos).then(()=>{
            navigate("/")
        })
    }


  return (
    <div>
        <form>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID :</label>
                    <input type="text" name='id' value={photos.id} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>
                
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title : :</label>
                    <input type="text" name='title' value={photos.title} onChange={(e)=>{handleChange(e)}}  className="form-control"  />
                
                </div>

                <div className="mb-3">
                    <label htmlFor="url" className="form-label">URL  :</label>
                    <input type="text" name='url' value={photos.url} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>

                <div className="mb-3">
                    <label htmlFor="thumbnailUrl" className="form-label">Thumbnail URL :</label>
                    <input type="text" name='thumbnailUrl' value={photos.thumbnailUrl} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>

                
                <button type="button" className='btn btn-primary' onClick={addPhoto}>Add photo</button>

                
            </form>
    </div>
  )
}
