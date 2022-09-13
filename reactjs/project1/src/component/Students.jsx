import React,{useState} from 'react'
import { useEffect } from 'react'
import{Link } from "react-router-dom"
import axios from 'axios'
export const Students = () => {
    const [students, setstudents] = useState([])
    let url="https://jsonplaceholder.typicode.com/users"
    axios.get(url).then(res=>{
        console.log(res.data)
        localStorage.setItem("students",JSON.stringify(res.data))
        setstudents(res.data)
    })
    useEffect(()=>{

    },[])
  return (
    <div>
        <button className='btn btn-primary'>add student</button>
        <table className="table">
  <thead>
    <tr>
      <th >id</th>
      <th >name</th>
      <th >username</th>
      <th >email</th>
      <th>Details</th>
     
    </tr>
  </thead>
  <tbody>
 
  {students.map((student,i)=><tr key={i} >
    <td>{student.id}</td>
    <td>{student.name}</td>
    <td>{student.username}</td>
    <td>{student.email}</td>
    {/* <td> <button type="button" className="btn btn-primary">Details</button> </td> */}
    <td>
      <Link to={`/${student.id}`} className="btn btn-primary" >details</Link>
      </td>
  </tr>

)}
   
   </tbody>
</table>
    </div>
  )
}
