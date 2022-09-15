import axios from 'axios'
import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'


export const Delete = () => {
    const urlObj = useParams()
    let url = "http://localhost:4002/post/"
    const navigate =useNavigate();


    const handleDelete =()=>{
        axios.delete(url+urlObj.id).then(()=>{
            navigate("/")
        })
    }
  return (
    <div className='container'>
      <p>I'm deleting you..is that okay for you?</p>
      <button onClick={handleDelete}>Delete User</button>
    </div>
  )
}
