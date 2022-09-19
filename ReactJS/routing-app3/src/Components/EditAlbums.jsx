import React,{useState} from 'react'
import {useParams,Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

export const EditAlbums = () => {
let url= "http://localhost:3300/Albums/";
const objurl = useParams();
const navigate = useNavigate();

const info = JSON.parse(localStorage.getItem("Albums"));
const albumslct = info.find((slctedalbum)=>slctedalbum.id == objurl.id);
const [slctedalbum, setaslctedlbum] = useState(albumslct);
const handleChange=(e)=>{
 let newcmnt = {...slctedalbum};
 newcmnt[e.target.name] = e.target.value;
 setaslctedlbum(newcmnt);
}
const update=()=>{
  axios.put(url+objurl.id,slctedalbum).then(()=>{
    navigate("/albums")
  })
}
  return (
    <div>
      <div className='editcontainer'> <h3>Please make necessary updates to your data</h3>
      <hr/>
    <form>
      <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">UserId :</label>
    <div className="col-sm-10">
      <input type="text"  className="form-control" name="userId" id="userId" value={slctedalbum.userId} onChange={(e)=>{handleChange(e)}} />
    </div>
  </div>
  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">Id :</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" name="id"  value={slctedalbum.id} onChange={(e)=>{handleChange(e)}}/>
    </div>
  </div>
 <div className="mb-3 row">
    <label className="col-sm-2 col-form-label">Title :</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" name="title" id="inputPassword" value={slctedalbum.title} onChange={(e)=>{handleChange(e)}}/>
    </div>
  </div>
  
<button type="button" className='btn btn-primary' onClick={update}>Update Album</button>
</form>

    </div>
    </div>
  )
}
