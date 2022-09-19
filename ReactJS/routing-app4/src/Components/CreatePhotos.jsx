import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export const CreatePhotos = () => {
  let url="http://localhost:3306/Photos";
  const navigate = useNavigate();
  const [photo1, setphoto1] = useState({
    albumId:"",
    id:"",
    title:"",
    url:"",
    thumbnailUrl:"",
  })

  const handleChange=(e)=>{
    let newphoto ={...photo1};
    newphoto[e.target.name] = e.target.value;
    setphoto1(newphoto);    
  }

  const adddata=()=>{
    axios.post(url,photo1).then(()=>{
      navigate("/photos")
    })
  }
  return (
    <div className='container'>
      CreateNewComment
    <form>
    <div className="mb-3 row">
  <label  className="col-sm-2 col-form-label">AlbumId :</label>
  <div className="col-sm-10">
    <input type="text"  className="form-control" name="albumId"  value={photo1.albumId} onChange={(e)=>{handleChange(e)}} />
  </div>
</div>
<div className="mb-3 row">
  <label  className="col-sm-2 col-form-label">Id :</label>
  <div className="col-sm-10">
    <input type="text" className="form-control" name="id"  value={photo1.id} onChange={(e)=>{handleChange(e)}}/>
  </div>
</div>
<div className="mb-3 row">
  <label className="col-sm-2 col-form-label">Title :</label>
  <div className="col-sm-10">
    <input type="text" className="form-control" name="title"  value={photo1.title} onChange={(e)=>{handleChange(e)}}/>
  </div>
</div>
<div className="mb-3 row">
<label  className="col-sm-2 col-form-label">Url :</label>
<div className="col-sm-10">
  <input type="text" className="form-control" name="url"  value={photo1.url} onChange={(e)=>{handleChange(e)}}/>
</div>  
</div>
<div className="mb-3 row">
<label  className="col-sm-2 col-form-label">ThumbnailUrl :</label>
<div className="col-sm-10">
  <input type="text" className="form-control" name="thumbnailUrl"  value={photo1.thumbnailUrl} onChange={(e)=>{handleChange(e)}}/>
</div>  
</div>
<button type="button" className='btn btn-primary' onClick={adddata}>Update Comment</button>
</form>
  </div>
  )
}
