import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Delete = () => {

    const objurl = useParams()
    const navigate=useNavigate()

     let url=" http://localhost:3030/bro/"

    const handledelete=()=>{
        axios.delete(url+objurl.id).then(()=>{
            navigate("/")
        })
    }
  return (
    <div>
        <p>are you sure you want to delete</p>
        <button type='button' onClick={handledelete} className='btn btn-danger'>del</button>
    </div>
  )
}
