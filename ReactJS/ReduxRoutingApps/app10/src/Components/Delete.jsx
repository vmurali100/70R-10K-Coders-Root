import axios from 'axios';
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const Delete = () => {
  let url="http://localhost:3201/filltext1/"
  const navigate=useNavigate();
  const param=useParams();

  const handleDelete=()=>{
    axios.delete(url+param.id).then(()=>{
      navigate('/Filltext1');      
    })
  }
  return (
    <div>
     <p> Are u sure u want to delete??</p>
      <span>
      <button type='button' className='btn btn-danger' onClick={handleDelete}>Delete</button>
      <Link to={'/Filltext1'} className='btn btn-primary' style={{marginLeft:"10px"}}>Cancel</Link></span>
    </div>
  )
}
