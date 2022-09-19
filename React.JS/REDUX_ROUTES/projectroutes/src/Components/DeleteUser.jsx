import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const DeleteUser = () => {
    const objUrl = useParams()
    const navigate = useNavigate()
    let url = " http://localhost:3001/users1/"

  const handleDelete=()=>{
    axios.delete(url+objUrl.id).then(()=>{
        navigate("/User")
    })
  }
  return (
    <div>
        <p>Are you sure to delete this data ?</p>
    <button type="button" onClick={handleDelete}>Delete</button>
    </div>
  )
}
