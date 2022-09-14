import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

export const Create = () => {
    const [students, setstudents] = useState([])
    let url="http://localhost:3000/pen "
   
    useEffect(()=>{
        axios.get(url).then(res=>{
            console.log(res.data)
            localStorage.setItem("students",JSON.stringify(res.data))
            setstudents(res.data)
        })
    },[])
  return (
    <div>
        <button className='btn btn-primary'>add student</button>
        <table className="table">
  <thead>
    <tr>
      <th >id</th>
      <th >email</th>
      <th >username</th>
      <th >password</th>
      <th>Details</th>
     
    </tr>
  </thead>
  <tbody>
 
  {students.map((student,i)=><tr key={i} >
    <td>{student.id}</td>
    <td>{student.email}</td>
    <td>{student.username}</td>
    <td>{student.pasword}</td>
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
