import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom'

export const PageDetails = () => {

    const urlobj = useParams()
    
    const Info = JSON.parse(localStorage.getItem("users"))
    const result = Info.find((MM) => MM.id == urlobj.id)
    const [page, setpage] = useState(result)

  return (
    <div>
        <div class="card">
  <div class="card-body">
    <h5 class="card-title">{page.title}</h5>
    <p class="card-text">{page.id}</p>
    <p class="card-text">{page.price}</p>
    <p class="card-text">{page.description}</p>
    <p class="card-text">{page.category}</p>
    <Link to="/" className='btn btn-success'>Go to homepage</Link>
  </div>
</div>
    </div>
  )
}
