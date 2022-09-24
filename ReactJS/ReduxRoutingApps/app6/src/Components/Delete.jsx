import axios from 'axios'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const Delete = () => {
  const url = 'http://localhost:3210/Users/'
  const objurl= useParams()
  const navigate = useNavigate()

  const handleDelete=()=>{
    axios.delete(url+objurl.id).then(()=>{
      navigate('/')
    })
  }
  return (
    <div>
      Are u sure u want to delete??
     <p><button onClick={handleDelete} className='btn btn-danger'>Delete</button></p>     
      <Link to={'/'} className='btn btn-primary'>Cancel</Link>
    </div>
  )
}
