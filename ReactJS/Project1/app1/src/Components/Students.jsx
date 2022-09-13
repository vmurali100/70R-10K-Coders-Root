import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from "react-router-dom";


import axios from 'axios'

export const Students = () => {
  const [students, setstudents] = useState([])
  useEffect(()=>{
    let url ="https://jsonplaceholder.typicode.com/users"
    axios.get(url).then(res=>{
      console.log(res.data)
      localStorage.setItem("Students",JSON.stringify(res.data))
      setstudents(res.data)
    })

  },[])
  return (
    <div className='container'>
      <button type='button' className='btn btn-primary'>Add Student</button>
      <table class="table table-striped-columns">
        
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Details</th>

          </tr>
        </thead>
        <tbody>
          {students.map((student,i)=>
          <tr key={i}>
            <td>{student.id}</td>
            <td>{student.email}</td>
            <td>{student.username}</td>
            <td>{student.email}</td>
            {/* <td><button type="button"className='btn btn-primary'>Details</button></td> */}
            <td>
              <Link to={`/${student.id}`} className=" btn btn-primary">Details</Link>
            </td>

         </tr>)}
        </tbody>
  
     </table>
    </div>
  )
}
