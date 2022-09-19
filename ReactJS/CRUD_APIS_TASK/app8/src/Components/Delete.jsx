import React from 'react'
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios"

export const Delete = () => {
    let url="http://localhost:4009/todo/"



    const urlObj = useParams()
    const navigate=useNavigate()
     const handleDelete=()=>{
     axios.delete(url+urlObj.id).then(()=>{
        navigate("/")
     })
     }
  return (
    <div>
        <p>Are you sure..you want to delete?</p>
        <button type="button" onClick={handleDelete}className='btn btn-danger'>Delete</button>
    </div>
  )
}
