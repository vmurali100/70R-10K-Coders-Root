import axios from 'axios';
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const Delete = () => {
  let url="http://localhost:3201/filltext1"
  const navigate=useNavigate();
  const param=useParams();

  const handleDelete=()=>{
    axios.delete(url+param.id).then(()=>{
      navigate('/Filltext1')
    })
  }
  return (
    <div>
      Are u sure u want to delete??
      <Link></Link>
    </div>
  )
}
