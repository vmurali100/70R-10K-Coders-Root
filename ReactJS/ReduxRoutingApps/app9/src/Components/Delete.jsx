import axios from 'axios';
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const Delete = () => {
    let url="http://localhost:3306/Users/";
    const param=useParams();
    const navigate=useNavigate();
    const handledelete=()=>{
        axios.delete(url+param.id).then(()=>{
            console.log(url+param.id);
            navigate("/")
        })
    }
  return (
    <div>
        <p>Are u sure u want to delete?</p>
        <span>
            <button type='button' className='btn btn-danger' onClick={handledelete}>Delete</button>
            <Link to={'/'} className='btn btn-primary' style={{marginLeft:"10px"}}>Cancel</Link>
        </span>
    </div>
  )
}
