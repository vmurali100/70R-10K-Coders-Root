import axios from 'axios'
import React from 'react'
import {useParams,useNavigate} from 'react-router-dom'

export const Delete = () => {

    let url = "http://localhost:3000/filltext/"

    const objUrl = useParams()

    const navigate = useNavigate()

    const deleteItem=()=>{
       axios.delete(url+objUrl.id).then(()=>{
        navigate("/")
       })
    }
  return (
    <div>
        <p><b>Are you sure ?</b></p>
        <button onClick={deleteItem} className="btn btn-danger" type="button">Delete</button>
    </div>
  )
}
