import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export const Read = () => {

  const [items, setItems] = useState([]);

  let url = "http://localhost:3000/filltext"

  useEffect(()=>{
      axios.get(url).then((response)=>{
        localStorage.setItem("filltext",JSON.stringify(response.data))
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
            <th>Telephine</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
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
              <td>{item.tel}</td>
              <td>{item.address}</td>
              <td>{item.city}</td>
              <td>{item.state}</td>
              <td>{item.zip}</td>
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
