import React,{useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios"

export const Edit = () => {
   const urlObj= useParams();
   let url="http://localhost:3010/photos/"



  const info = JSON.parse(localStorage.getItem("users"))
  const result = info.find((std)=> std.id == urlObj.id)
  console.log(urlObj)


  const [photo, setphoto] = useState(result)
  const navigate= useNavigate()



  const UpdatePhoto=()=>{
    axios.put(url+urlObj.id,photo).then(()=>{
      navigate("/")
    })

  }
  const handleChange=(e)=>{
    let newPhotos={...photo}
   newPhotos[e.target.name]=e.target.value
   setphoto(newPhotos)

}
return (
    <div className='container'>
    <form>
    <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="id" className="form-control" name="id" value={photo.id}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
            <label htmlFor="albumId" className="form-label">albumId</label>
          <input type="albumId" className="form-control"  name="albumId" value={photo.albumId}  onChange={(e)=>{handleChange(e)}}/>

            </div>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="title" className="form-control"  name="title" value={photo.title}  onChange={(e)=>{handleChange(e)}}/>

            </div>
           
            <div className="mb-3">
                <label htmlFor="url" className="form-label">url </label>
                <input type="url" className="form-control"  name="url" value={photo.url}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="thumbnailUrl" className="form-label">thumbnailUrl </label>
                <input type="thumbnailUrl" className="form-control"  name="thumbnailUrl" value={photo.thumbnailUrl}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            
            
            

       <button type="button" className='btn btn-primary' onClick={UpdatePhoto}>Update</button>


</form>
</div>
  )}
