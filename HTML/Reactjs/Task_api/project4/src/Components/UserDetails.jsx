import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom'

export const UserDetails = () => {

    const urlobj = useParams()
    
    const Info = JSON.parse(localStorage.getItem("users"))
    const result = Info.find((MM) => MM.id == urlobj.id)
    const [user, setuser] = useState(result)

  return (
    <div>
        <div class="card">
  <div class="card-body">
    <h5 class="card-title">{user.username}</h5>
    <p class="card-text">{user.id}</p>
    <p class="card-text">{user.email}</p>
    <p class="card-text">{user.password}</p>
    <Link to="/" className='btn btn-success'>Go to homepage</Link>
  </div>
</div>
    </div>
  )
}