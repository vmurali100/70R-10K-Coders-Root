import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom'

export const ListData = () => {

    const urlobj = useParams()
    
    const Info = JSON.parse(localStorage.getItem("lists"))
    const result = Info.find((MM) => MM.id == urlobj.id)
    const [list, setlist] = useState(result)

  return (
    <div>
        <div class="card">
  <div class="card-body">
    <h5 class="card-title">{list.fname}</h5>
    <p class="card-text">{list.id}</p>
    <p class="card-text">{list.lname}</p>

    <Link to="/" className='btn btn-success'>Go to homepage</Link>
  </div>
</div>
    </div>
  )
}
