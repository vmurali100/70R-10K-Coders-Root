import React from 'react'
import { useEffect,useState } from 'react'
import { Link,useNavigate } from "react-router-dom";


import axios from 'axios'

export const Students = () => {
  const [students, setstudents] = useState([])
  const navigate =useNavigate();
  useEffect(()=>{
    let url ="http://localhost:4002/post/"
    axios.get(url).then(res=>{
      console.log(res.data)
    //   localStorage.setItem("Students",JSON.stringify(res.data))
      setstudents(res.data)
    })

  },[])

  const addStudent =()=>{
      navigate("/createStudent")
  }
  return (

    <div className='container'>
    <button type='button' className='btn btn-primary' onClick={addStudent}>Add Student</button>


      <table class="table table-striped-columns">
        
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>



          </tr>
        </thead>
        <tbody>
          {students.map((student,i)=>
          <tr key={i}>

            <td>{student.id}</td>
            <td>{student.email}</td>
            <td>{student.username}</td>
            <td>{student.password}</td>
            {/* <td><button type="button"className='btn btn-primary'>Details</button></td> */}
            <td>
              <Link to={`/${student.id}`} className=" btn btn-primary">Details</Link>

            </td>
            <td>
              <Link to={`editStudent/${student.id}`} className=" btn btn-warning">Edit</Link>

            </td>
            <td>
              <Link to={`deleteStudent/${student.id}`} className=" btn btn-danger">Delete</Link>

            </td>


         </tr>)}
        </tbody>
  
     </table>
    </div>
  )
}
