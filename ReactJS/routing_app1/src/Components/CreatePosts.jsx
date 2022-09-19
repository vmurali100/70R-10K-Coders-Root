import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const CreatePosts = () => {
  const navigate = useNavigate();
let url="http://localhost:3201/ReactPosts";
const [newpost, setnewpost] = useState({
  userId:"",
  id:"",  
  title:"",
  body:"",
})

  const handleChange=(e)=>{
    let newpost1={...newpost};
    newpost1[e.target.name] = e.target.value;
    setnewpost(newpost1);
  }

  const adddata=()=>{
    axios.post(url,newpost).then(()=>{
      navigate("/posts")
    })
  }
  return (
    <div className='container'>
      CreatePosts
      <div className='container'>
      <form>
      <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">UserId :</label>
    <div className="col-sm-10">
      <input type="text"  className="form-control" name="userId"  value={newpost.userId} onChange={(e)=>{handleChange(e)}} />
    </div>
  </div>
  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">Id :</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" name="id"  value={newpost.id} onChange={(e)=>{handleChange(e)}}/>
    </div>
  </div>
 <div className="mb-3 row">
    <label className="col-sm-2 col-form-label">Title :</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" name="title"  value={newpost.title} onChange={(e)=>{handleChange(e)}}/>
    </div>
  </div>
  <div className="mb-3 row">
  <label  className="col-sm-2 col-form-label">Body :</label>
  <div className="col-sm-10">
    <input type="text" className="form-control" name="body"  value={newpost.body} onChange={(e)=>{handleChange(e)}}/>
  </div>  
</div>
<button type="button" className='btn btn-primary' onClick={adddata}>Update Todo</button>
</form>
    </div></div>
  )
}
