import React from 'react'
import { useEffect,useState } from 'react'

import axios from 'axios'

export const Students = () => {
  const [students, setstudents] = useState([])
  useEffect(()=>{
    let url ="https://jsonplaceholder.typicode.com/users"
    axios.get(url).then(res=>{
      console.log(res.data)
      setstudents(res.data)
    })

  },[])
  return (
    <div className='container'>
      <table class="table table-striped-columns">
        <button>Add Student</button>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>

          </tr>
        </thead>
        <tbody>
          {students.map((student,i)=>
          <tr key={i}>
            <td>{student.id}</td>
            <td>{student.email}</td>
            <td>{student.username}</td>
            <td>{student.email}</td>

         </tr>)}
        </tbody>
  
     </table>
    </div>
  )
}
