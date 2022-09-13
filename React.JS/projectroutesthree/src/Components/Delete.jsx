import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const DeletePhotos = () => {

    const objUrl = useParams()

    const navigate = useNavigate()

    let url = " http://localhost:3201/photos/"

    const deletephoto=()=>{
            axios.delete(url+objUrl.id).then(()=>{
                navigate("/")
            })
    }


  return (
    <div>
        <p>Are you sure to delete this data ?</p>
        <button type="button" onClick={deletephoto}>Delete</button>
    </div>
  )
}
