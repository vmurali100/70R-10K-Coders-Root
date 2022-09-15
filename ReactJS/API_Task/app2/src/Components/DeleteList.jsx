import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const DeleteList = () => {

    const urlObj = useParams()
    let url = "http://localhost:3003/lists/"
    const navigate = useNavigate();

    const handleDelete=()=>{
        axios.DeleteList(url+urlObj.id).then(()=>{
            navigate("/")
        })
    }

    
  return (
    <div className="container">
        <hr />
        <hr />
        <p>Delete it</p>
        <button onClick={handleDelete}>Delete One</button>
    </div>
  )
}
