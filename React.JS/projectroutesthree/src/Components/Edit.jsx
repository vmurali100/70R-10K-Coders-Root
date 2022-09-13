import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

export const EditPhotos = () => {
    const objUrl = useParams()

    let url = " http://localhost:3201/photos/"

    const navigate = useNavigate()
    
    

    const info = JSON.parse(localStorage.getItem("photos"))

    const result = info.find((pho)=>pho.id == objUrl.id)

    console.log(result)

    const [photoData, setphotoData] = useState(result)

    console.log(photoData)

    const handleChange = (e)=>{
        let newPhotoDetails = {...photoData}
        newPhotoDetails[e.target.name]= e.target.value
        setphotoData(newPhotoDetails)
        console.log(photoData)
    }

    

    const updatePhoto=()=>{
        axios.put(url+objUrl.id,photoData).then(()=>{
                navigate("/")
        })
    }
    
  return (
    <div>
        <form>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID :</label>
                    <input type="text" name='id' value={photoData.id} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>
                
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title : :</label>
                    <input type="text" name='title' value={photoData.title} onChange={(e)=>{handleChange(e)}}  className="form-control"  />
                
                </div>

                <div className="mb-3">
                    <label htmlFor="url" className="form-label">URL  :</label>
                    <input type="text" name='url' value={photoData.url} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>

                <div className="mb-3">
                    <label htmlFor="thumbnailUrl" className="form-label">Thumbnail URL :</label>
                    <input type="text" name='thumbnailUrl' value={photoData.thumbnailUrl} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>

                
                <button type="button" className='btn btn-primary' onClick={updatePhoto}>Update photo</button>

                
            </form>
    </div>
  )
}
