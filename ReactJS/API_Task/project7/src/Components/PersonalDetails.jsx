import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom'

export const PersonalDetails = () => {

    const urlobj = useParams()
    
    const Info = JSON.parse(localStorage.getItem("users"))
    const result = Info.find((MM) => MM.id == urlobj.id)
    const [personal, setpersonal] = useState(result)

  return (
    <div>
        <div class="card">
  <div class="card-body">
    <h5 class="card-title">{personal.university}</h5>
    <p class="card-text">{personal.id}</p>
    <p class="card-text">{personal.institute}</p>
    <p class="card-text">{personal.branch}</p>
    <p class="card-text">{personal.degree}</p>
    <p class="card-text">{personal.average}</p>
    <p class="card-text">{personal.experience}</p>
    <p class="card-text">{personal.website}</p>
    <Link to="/" className='btn btn-success'>Go to homepage</Link>
  </div>
</div>
    </div>
  )
}
