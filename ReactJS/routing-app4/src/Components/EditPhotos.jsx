import axios from 'axios'
import React,{useState} from 'react'
import {  useNavigate, useParams } from 'react-router-dom'

export const EditPhotos = () => {
  let url="http://localhost:3306/Photos/";
  const objurl=useParams();
  console.log(objurl)
  const navigate = useNavigate();

  const info = JSON.parse(localStorage.getItem("Photos"));  
  const selectedcmnt = info.find((editObj)=>editObj.id == objurl.id)
  const [editObj, seteditObj] = useState(selectedcmnt);

  const handleChange=(e)=>{
   let neweditObj= {...editObj};
   neweditObj[e.target.name] = e.target.value;
   seteditObj(neweditObj);
  }

  const updateComment =()=>{
    axios.put(url+objurl.id,editObj).then(()=>{
      navigate("/photos")
    })
  }
  return (
    <div className='container'> <h3>Please make necessary updates to your data</h3>
    <hr/>
  <form>
    <div className="mb-3 row">
  <label  className="col-sm-2 col-form-label">AlbumId :</label>
  <div className="col-sm-10">
    <input type="text"  className="form-control" name="albumId" id="userid" value={editObj.albumId} onChange={(e)=>{handleChange(e)}} />
  </div>
</div>
<div className="mb-3 row">
  <label  className="col-sm-2 col-form-label">Id :</label>
  <div className="col-sm-10">
    <input type="text" className="form-control" name="id" id="inputPassword" value={editObj.id} onChange={(e)=>{handleChange(e)}}/>
  </div>
</div>
<div className="mb-3 row">
  <label className="col-sm-2 col-form-label">Title :</label>
  <div className="col-sm-10">
    <input type="text" className="form-control" name="title" id="inputPassword" value={editObj.title} onChange={(e)=>{handleChange(e)}}/>
  </div>
</div>
<div className="mb-3 row">
<label  className="col-sm-2 col-form-label">Url :</label>
<div className="col-sm-10">
  <input type="text" className="form-control" name="url" id="inputPassword" value={editObj.url} onChange={(e)=>{handleChange(e)}}/>
</div>  
</div>
<div className="mb-3 row">
<label  className="col-sm-2 col-form-label">ThumbnailUrl :</label>
<div className="col-sm-10">
  <input type="text" className="form-control" name="thumbnailUrl" id="inputPassword" value={editObj.thumbnailUrl} onChange={(e)=>{handleChange(e)}}/>
</div>  
</div>
<button type="button" className='btn btn-primary' onClick={updateComment}>Update Post</button>
</form>

  </div>
  )
}
