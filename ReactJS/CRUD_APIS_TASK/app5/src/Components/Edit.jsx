import React,{useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios"

export const Edit = () => {
   const urlObj= useParams();
   let url="http://localhost:4006/photos/"


  const info = JSON.parse(localStorage.getItem("photos"))
  const result = info.find((std)=> std.id == urlObj.id)
  console.log(urlObj)


  const [photo, setphoto] = useState(result)
  const navigate= useNavigate()



  const UpdateUser=()=>{
    axios.put(url+urlObj.id,photo).then(()=>{
      navigate("/")
    })

  }
  const handleChange=(e)=>{
    let newUsers={...photo}
   newUsers[e.target.name]=e.target.value
   setphoto(newUsers)

}
  return (
    <div className='container'>
    <form>
    <label htmlFor=''>ID :</label>
       <input type="text" name="id" value={photo.id} onChange={(e)=>{handleChange(e)}} /> <br/>
       <label htmlFor=''>AlbumId :</label>
       <input type="text" name="albumId" value={photo.albumId} onChange={(e)=>{handleChange(e)}} /> <br/>
       <label htmlFor="">Title :</label>
       <input type="text" name="title"value={photo.title} onChange={(e)=>{handleChange(e)}}/> <br/>
       <label htmlFor="">Url :</label>
       <input type="text" name="url"value={photo.url} onChange={(e)=>{handleChange(e)}}/> <br/>
       <label htmlFor="">ThumbnailUrl :</label>
       <input type="text" name="thumbnailUrl"value={photo.thumbnailUrl} onChange={(e)=>{handleChange(e)}}/> <br/>

       <button type="button" className='btn btn-primary' onClick={UpdateUser}>Add</button>


</form>
</div>
  )}
