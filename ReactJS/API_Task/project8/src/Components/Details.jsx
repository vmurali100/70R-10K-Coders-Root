import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom'

export const Details = () => {

    const urlobj = useParams()
    
    const Info = JSON.parse(localStorage.getItem("users"))
    const result = Info.find((MM) => MM.id == urlobj.id)
    const [todo, settodo] = useState(result)

  return (
    <div>
        <div class="card">
  <div class="card-body">
    <h5 class="card-title">{todo.street}</h5>
    <p class="card-text">{todo.id}</p>
    <p class="card-text">{todo.city}</p>
    <p class="card-text">{todo.state}</p>
    <p class="card-text">{todo.zipcode}</p>
    <p class="card-text">{todo.country}</p>

    <Link to="/" className='btn btn-success'>Go to homepage</Link>
  </div>
</div>
    </div>
  )
}
