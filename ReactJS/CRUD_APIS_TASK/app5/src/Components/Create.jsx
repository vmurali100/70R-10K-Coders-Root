import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios"


export const Create = () => {
  let url="http://localhost:4006/photos/"
  const [photo, setphoto] = useState({id:"",albumId:"",title:"",url:"",thumbnailUrl:""})
  const navigate= useNavigate()


  const handleChange=(e)=>{
    let newUsers={...photo}
       newUsers[e.target.name]=e.target.value
       setphoto(newUsers) 
  }
  
    const AddUser=()=>{
        axios.post(url,photo).then(()=>{
            navigate('/')
        })
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

       <button type="button" className='btn btn-primary' onClick={AddUser}>Add</button>


</form>
</div>
  )}
