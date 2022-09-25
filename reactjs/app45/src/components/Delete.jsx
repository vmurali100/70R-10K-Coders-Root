import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const Delete = () => {

  const objurl = useParams()
  const navigate = useNavigate()


  let url = "http://localhost:4002/two/"


  const handledelete = () => {
    axios.delete(url + objurl.id).then(() => {
      navigate("/")
    })
  }



  return (
    <div>
      <p>are you sure you want to delete</p>
      <button type='button' onClick={handledelete} className='btn btn-danger'>DELETE</button>
    </div>
  )
}
