import axios from 'axios'
import React from 'react'
import {  useNavigate,useParams } from 'react-router-dom'

export const Delete = () => {
  const urlObj = useParams()

let url="http://localhost:4004/comments/"
const navigate=useNavigate()

  const handleDelete=()=>{
    axios.delete(url+urlObj.id).then(()=>{
      navigate("/")

    })

  }
  return (
    <div>
      <p>Are you sure... you want to delete?</p>
      <button type='button' className='btn btn-danger' onClick={handleDelete}>Delete</button>
    </div>
  )
}
