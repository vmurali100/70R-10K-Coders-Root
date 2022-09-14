
import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from "react-router-dom";


import axios from 'axios'

export const Teachers = () => {
  const [teachers, setteachers] = useState([])
  useEffect(()=>{
    let url ="https://jsonplaceholder.typicode.com/posts"
    axios.get(url).then(res=>{
      console.log(res.data)
      localStorage.setItem("Teachers",JSON.stringify(res.data))

      setteachers(res.data)
    })

  },[])
  return (
    <div className='container'>
      <table class="table table-striped-columns">
        <thead>
          <tr>
            <th >UserID</th>
            <th >ID</th>
            <th >Title</th>
            <th >Body</th>


            

          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher,i)=>
          <tr key={i}>
          <td >{teacher.userId}</td>
          <td >{teacher.id}</td>
          <td >{teacher.title}</td>
          <td >{teacher.body}</td>

          <td>
              <Link to={`/${teacher.id}`} className=" btn btn-primary">Details</Link>
            </td>
          

         </tr>)}
        </tbody>
  
     </table>
    </div>
  )
}




            
          

