import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom'

export const CollageDetails = () => {

    const urlobj = useParams()
    
    const Info = JSON.parse(localStorage.getItem("users"))
    const result = Info.find((MM) => MM.id == urlobj.id)
    const [Collage, setCollage] = useState(result)
    setCollage(result)
  return (
    <div>
        <div class="card">
  <div class="card-body">
    <h5 class="card-title">{Collage.university}</h5>
    <p class="card-text">{Collage.id}</p>
    <p class="card-text">{Collage.institute}</p>
    <p class="card-text">{Collage.branch}</p>
    <p class="card-text">{Collage.degree}</p>
    <p class="card-text">{Collage.average}</p>
    <p class="card-text">{Collage.experience}</p>
    <p class="card-text">{Collage.website}</p>
    <Link to="/" className='btn btn-success'>Go to homepage</Link>
  </div>
</div>
    </div>
  )
}