import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const EditPost = () => {
 let url= "http://localhost:3201/ReactPosts/";
 const objurl= useParams();
 const navigate = useNavigate();
 
  const info = JSON.parse(localStorage.getItem("Posts"));
  const selectedpost = info.find((editdata)=>editdata.id == objurl.id);
  // console.log(selectedpost);  

  const [editdata, seteditdata] = useState(selectedpost);

  const handleChange=(e)=>{
    let neweditdata  ={...editdata};
    neweditdata[e.target.name] = e.target.value;
    seteditdata(neweditdata);
  }

  const updatepost=()=>{
    axios.put(url+objurl.id,editdata).then(()=>{
      navigate("/posts");
    })
  }
  return (
    <div className='container'>
      <form>
      <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">UserId :</label>
    <div className="col-sm-10">
      <input type="text"  className="form-control" name="userid" id="userid" value={editdata.userId} onChange={(e)=>{handleChange(e)}} />
    </div>
  </div>
  <div className="mb-3 row">
    <label  className="col-sm-2 col-form-label">Id :</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" name="id" id="inputPassword" value={editdata.id} onChange={(e)=>{handleChange(e)}}/>
    </div>
  </div>
 <div className="mb-3 row">
    <label className="col-sm-2 col-form-label">Title :</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" name="title" id="inputPassword" value={editdata.title} onChange={(e)=>{handleChange(e)}}/>
    </div>
  </div>
  <div className="mb-3 row">
  <label  className="col-sm-2 col-form-label">Body :</label>
  <div className="col-sm-10">
    <input type="text" className="form-control" name="body" id="inputPassword" value={editdata.body} onChange={(e)=>{handleChange(e)}}/>
  </div>  
</div>
<button type="button" className='btn btn-primary' onClick={updatepost}>Update Post</button>
</form>
    </div>
  )
}
