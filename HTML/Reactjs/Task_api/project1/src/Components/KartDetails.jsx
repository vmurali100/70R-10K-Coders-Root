import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom'

export const KartDetails = () => {

    const urlobj = useParams()
    
    const Info = JSON.parse(localStorage.getItem("users"))
    const result = Info.find((PS) => PS.id == urlobj.id)
    const [kart, setkart] = useState(result)
    setkart()


  return (
    <div>
        <div class="card">
  <div class="card-body">
    <h5 class="card-title">{kart.title}</h5>
    <p class="card-text">{kart.id}</p>
    <p class="card-text">{kart.price}</p>
    <p class="card-text">{kart.description}</p>
    <p class="card-text">{kart.category}</p>
    <Link to="/" className='btn btn-success'>Go to homepage</Link>
  </div>
</div>
    </div>
  )
}