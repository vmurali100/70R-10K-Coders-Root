import axios from 'axios';
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const Delete = () => {
  let url='http://localhost:3305/FakeCarts/';
  const navigate = useNavigate();
  let urlobj=useParams()

  const handleDelete=()=>{
    axios.delete(url+urlobj.id).then(()=>{
      navigate('/');
    })
  }
  return (
    <div>
      Are u sure u want to delete??
      <span> <button type='button' onClick={handleDelete}>Delete</button> 
    <Link to={'/'}> <button type='button'>Cancel</button></Link> </span>
    </div>
  )
}
