import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom'

export const StudentDetails = () => {

    const urlobj = useParams()
    
    const Info = JSON.parse(localStorage.getItem("Students"))
    const result = Info.find((MM) => MM.id == urlobj.id)
    const [student, setstudent] = useState(result)

  return (
    <div>
        <hr />
        <hr />
        <hr />
        <div class="card">
  <div class="card-body">
    <h5 class="card-title">{student.userId}</h5>
    <p class="card-text">{student.id}</p>
    <p class="card-text">{student.date}</p>

    <Link to="/" className='btn btn-success'>Go to homepage</Link>
  </div>
</div>
    </div>
  )
}