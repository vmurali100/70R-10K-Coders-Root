import React from 'react'
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios"



export const Delete = () => {
  let url="http://localhost:4005/albums/"
  const urlObj = useParams()

  const navigate= useNavigate()

  const handleDelete=()=>{
    axios.delete(url+urlObj.id).then(()=>{
      navigate('/')
    })
  }
  return (
    <div>
      <p>Are you sure.... you wanted to delete?</p>
      <button type='button'className="btn btn-danger" onClick={handleDelete}>Delete</button>
    </div>
  )
}
