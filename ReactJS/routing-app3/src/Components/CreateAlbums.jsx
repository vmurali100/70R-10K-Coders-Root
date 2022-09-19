import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const CreateAlbums = () => {
 let url="http://localhost:3300/Albums";
const navigate = useNavigate();
const [newalbum, setnewalbum] = useState({
  userId:"",
  id:"",
  title:"",
})

const handleChange =(e)=>{
  let newalbum2 = {...newalbum};
  newalbum2[e.target.name] = e.target.value;
  setnewalbum(newalbum2);
}

const adddata =()=>{
  axios.post(url,newalbum).then(()=>{
    navigate("/albums");
  })
}
  return (
    <div className='addcontainer'>
      CreateNewComment
    <form>
    <div className="mb-3 row">
  <label  className="col-sm-2 col-form-label">UserId :</label>
  <div className="col-sm-10">
    <input type="text"  className="form-control" name="userId"  value={newalbum.userId} onChange={(e)=>{handleChange(e)}} />
  </div>
</div>
<div className="mb-3 row">
  <label  className="col-sm-2 col-form-label">Id :</label>
  <div className="col-sm-10">
    <input type="text" className="form-control" name="id"  value={newalbum.id} onChange={(e)=>{handleChange(e)}}/>
  </div>
</div>
<div className="mb-3 row">
  <label className="col-sm-2 col-form-label">Title :</label>
  <div className="col-sm-10">
    <input type="text" className="form-control" name="title"  value={newalbum.title} onChange={(e)=>{handleChange(e)}}/>
  </div>
</div>

<button type="button" className='btn btn-primary' onClick={adddata}>Add</button>
</form>
  </div>
  )
}
