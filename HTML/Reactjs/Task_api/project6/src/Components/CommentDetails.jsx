import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom'

export const Details = () => {

    const urlobj = useParams()
    
    const Info = JSON.parse(localStorage.getItem("users"))
    const result = Info.find((MM) => MM.id == urlobj.id)
    const [data, setdata] = useState(result)

  return (
    <div>
        <div class="card">
  <div class="card-body">
    <h5 class="card-title">{data.name}</h5>
    <p class="card-text">{data.id}</p>
    <p class="card-text">{data.email}</p>
    <p class="card-text">{data.body}</p>
    <Link to="/" className='btn btn-success'>Go to homepage</Link>
  </div>
</div>
    </div>
  )
}