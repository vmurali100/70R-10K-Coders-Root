import axios from 'axios'
import React,{useState} from 'react'
import {  useNavigate, useParams } from 'react-router-dom'

export const EditComments = () => {
  let url="http://localhost:3205/Comments/";
  const objurl=useParams();
  console.log(objurl)
  const navigate = useNavigate();

  const info = JSON.parse(localStorage.getItem("Comments"));  
  const selectedcmnt = info.find((editObj)=>editObj.id == objurl.id)
  const [editObj, seteditObj] = useState(selectedcmnt);

  const handleChange=(e)=>{
   let neweditObj= {...editObj};
   neweditObj[e.target.name] = e.target.value;
   seteditObj(neweditObj);
  }

  const updateComment =()=>{
    axios.put(url+objurl.id,editObj).then(()=>{
      navigate("/comments")
    })
  }
 
  
  return (
    <div className='container'> <h3>Please make necessary updates to your data</h3>
      <hr/>
    <form>
      <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">PostId :</label>
    <div className="col-sm-10">
      <input type="text"  className="form-control" name="postId" id="userid" value={editObj.postId} onChange={(e)=>{handleChange(e)}} />
    </div>
  </div>
  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">Id :</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" name="id" id="inputPassword" value={editObj.id} onChange={(e)=>{handleChange(e)}}/>
    </div>
  </div>
 <div className="mb-3 row">
    <label className="col-sm-2 col-form-label">Name :</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" name="name" id="inputPassword" value={editObj.name} onChange={(e)=>{handleChange(e)}}/>
    </div>
  </div>
  <div className="mb-3 row">
  <label  className="col-sm-2 col-form-label">Email :</label>
  <div className="col-sm-10">
    <input type="text" className="form-control" name="email" id="inputPassword" value={editObj.email} onChange={(e)=>{handleChange(e)}}/>
  </div>  
</div>
<div className="mb-3 row">
  <label  className="col-sm-2 col-form-label">Body :</label>
  <div className="col-sm-10">
    <input type="text" className="form-control" name="body" id="inputPassword" value={editObj.body} onChange={(e)=>{handleChange(e)}}/>
  </div>  
</div>
<button type="button" className='btn btn-primary' onClick={updateComment}>Update Post</button>
</form>

    </div>
  )
}
