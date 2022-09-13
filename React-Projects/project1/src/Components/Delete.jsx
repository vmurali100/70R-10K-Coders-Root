import React from 'react'
import {Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
export const Delete = () => {
    const urlObj = useParams();
    const navigate = useNavigate()
    let url ="http://localhost:3000/user/"
    const handleDelete=()=>{
        axios.delete(url+urlObj.id).then(()=>{navigate("/")})
    }
  return (
    <div className='container'>
        <p>Are You Sure Want You to Delete?</p>
        <button onClick={handleDelete}> Delete</button>
    </div>
  )
}
