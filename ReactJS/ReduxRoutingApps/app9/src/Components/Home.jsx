import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export const Home = () => {

  const [users, setusers] = useState([]);

  let url = "http://localhost:3306/Users"

  useEffect(()=>{
      axios.get(url).then((response)=>{
        localStorage.setItem("UsersReact",JSON.stringify(response.data))
        setusers(response.data);
        console.log(response.data)
      })  
  },[])

  return (
    <div >
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
           {users.map((item,i)=>{
            
            return <tr key={i}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item.password}</td>
              {/* <td>{item.phone}</td> */}
              {/* <td>{item.name.lastname}</td> */}
             
              
              <td>
                <Link to={`/edit/${item.id}`} className="btn btn-warning">Edit</Link>
              </td>
              <td>
              <Link to={`/delete/${item.id}`} className="btn btn-danger">Delete</Link>
              </td>
              
            </tr>
           })}
        </tbody>
      </table>
    </div>
  )
}