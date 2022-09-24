import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export const Read = () => {

  const [fillTextThree, setfillTextThree] = useState([]);

  let url = "http://localhost:3000/filltextthree"

  useEffect(()=>{
      axios.get(url).then((response)=>{
        localStorage.setItem("filltextthree",JSON.stringify(response.data))
        setfillTextThree(response.data);
      })  
  },[])

  return (
    <div>
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>password</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
           {fillTextThree.map((item,i)=>{
            return <tr key={i}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item.password}</td>
              
              <td>
                <Link to={`/Edit/${item.id}`} className="btn btn-warning">Edit</Link>
              </td>
              <td>
              <Link to={`/Delete/${item.id}`} className="btn btn-danger">Delete</Link>
              </td>
              <td>
              <Link to={`/Details/${item.id}`} className="btn btn-success">Details</Link>
              </td>
            </tr>
           })}
        </tbody>
      </table>
    </div>
  )
}
