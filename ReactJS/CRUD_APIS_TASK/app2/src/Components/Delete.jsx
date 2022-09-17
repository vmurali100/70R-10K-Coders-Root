import axios from 'axios'
import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'

export const Delete = () => {
    const urlObj = useParams()

    let url="http://localhost:4003/posts/"
    const navigate=useNavigate()

    const handleDelete =()=>{
        
        axios.delete(url+urlObj.id).then(()=>{
            navigate("/")
        })
    }
  return (
    <div className='container'>
        <p>Are you sure..You want to delete</p>
        <button type='button' className='btn btn-danger' onClick={handleDelete}>Delete</button>
    </div>
  )
}

