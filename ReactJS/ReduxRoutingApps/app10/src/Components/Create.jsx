import axios from 'axios';
import React,{useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { DataForm } from './DataForm';

export const Create = () => {
  let btnTxt='Add';
  const url="http://localhost:3201/filltext1";
  const navigate=useNavigate()
  const param= useParams();
  const [mem, setmem] = useState({
    id:"",
    email:"",
    username:"",
    password:"",
    address:{
      city:"",
      state:""
    }
  });

  const handlechange=(e)=>{
    let newmem={...mem};
    newmem[e.target.name]=e.target.value;
    setmem(newmem)
  }
  const handleEvent=()=>{
    axios.post(url,mem).then(()=>{
      console.log("added successfully");
      navigate("/Filltext1")
    })
  }
  return (
    <div>
    <form>
<div className="mb-3">
<label htmlFor="id" className="form-label">Id:</label>
<input type="email" className="form-control" name="id" value={mem.id} onChange={(e)=>{handlechange(e)}}/>
</div>
<div className="mb-3">
<label htmlFor="email" className="form-label">Email:</label>
<input type="email" className="form-control" name="email" value={mem.email} onChange={(e)=>{handlechange(e)}}/>
</div>
<div className="mb-3">
<label htmlFor="username" className="form-label">Username:</label>
<input type="email" className="form-control" name="username" value={mem.username} onChange={(e)=>{handlechange(e)}}/>
</div>
<div className="mb-3">
<label htmlFor="password" className="form-label">Password:</label>
<input type="email" className="form-control" name="password" value={mem.password} onChange={(e)=>{handlechange(e)}}/>
</div>
<div className="mb-3">
<label htmlFor="city" className="form-label">City:</label>
<input type="text" className="form-control" name="address.city" value={mem.address.city} onChange={(e)=>{handlechange(e)}}/>
</div>
<div className="mb-3">
<label htmlFor="state" className="form-label">State:</label>
<input type="text" className="form-control" name="address.state" value={mem.address.state} onChange={(e)=>{handlechange(e)}}/>
</div>

<button type="button" className="btn btn-primary" onClick={handleEvent}>{btnTxt}</button>
<Link to={'/'} style={{marginLeft:"10px"}} className='btn btn-primary'>Cancel</Link>
</form>
</div>
  )
}
