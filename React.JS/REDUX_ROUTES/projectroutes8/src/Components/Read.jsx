import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export const Read = () => {

  const [items, setItems] = useState([]);

  let url = "http://localhost:3000/one"

  useEffect(()=>{
      axios.get(url).then((response)=>{
        setItems(response.data);
      })  
  },[])

  return (
    <div>
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
           {items.map((item,i)=>{
            return <tr key={i}>
              <td>{item.id}</td>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
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
