import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const CreateComments = () => {
  let url="http://localhost:3205/Comments";
   const navigate =  useNavigate();
   const [newcmnt, setnewcmnt] = useState({
    postId:"",
    id:"",
    name:"",
    email:"",
    body:"",
   })

    const handleChange=(e)=>{
      let newcmnt2 ={...newcmnt};
      newcmnt2[e.target.name]=e.target.value;
      setnewcmnt(newcmnt2);
    }

    const adddata=()=>{
      axios.post(url,newcmnt).then(()=>{
        navigate("/comments")
      })
    }
  return (   
    <div className='container'>
      CreateNewComment
    <form>
    <div className="mb-3 row">
  <label  className="col-sm-2 col-form-label">PostId :</label>
  <div className="col-sm-10">
    <input type="text"  className="form-control" name="postId"  value={newcmnt.postId} onChange={(e)=>{handleChange(e)}} />
  </div>
</div>
<div className="mb-3 row">
  <label  className="col-sm-2 col-form-label">Id :</label>
  <div className="col-sm-10">
    <input type="text" className="form-control" name="id"  value={newcmnt.id} onChange={(e)=>{handleChange(e)}}/>
  </div>
</div>
<div className="mb-3 row">
  <label className="col-sm-2 col-form-label">Name :</label>
  <div className="col-sm-10">
    <input type="text" className="form-control" name="name"  value={newcmnt.name} onChange={(e)=>{handleChange(e)}}/>
  </div>
</div>
<div className="mb-3 row">
<label  className="col-sm-2 col-form-label">Email :</label>
<div className="col-sm-10">
  <input type="text" className="form-control" name="email"  value={newcmnt.email} onChange={(e)=>{handleChange(e)}}/>
</div>  
</div>
<div className="mb-3 row">
<label  className="col-sm-2 col-form-label">Body :</label>
<div className="col-sm-10">
  <input type="text" className="form-control" name="body"  value={newcmnt.body} onChange={(e)=>{handleChange(e)}}/>
</div>  
</div>
<button type="button" className='btn btn-primary' onClick={adddata}>Update Comment</button>
</form>
  </div>
  )
}
