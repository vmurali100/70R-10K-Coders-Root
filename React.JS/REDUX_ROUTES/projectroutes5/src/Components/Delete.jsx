import axios from 'axios'
import React from 'react'
import {  useNavigate, useParams } from 'react-router-dom'

export const Delete = () => {
    const objUrl = useParams()

    let url = " http://localhost:3202/comments/"

    const navigate = useNavigate()

    const deleteComment=()=>{
        axios.delete(url+objUrl.id).then(()=>{
            navigate("/")
        })
    }


  return (
    <div>
        <p>Please confirm Delete ?</p>
        <button type="button" className='btn btn-outline-danger'onClick={deleteComment}>Yes Delete</button>
    </div>
  )
}
