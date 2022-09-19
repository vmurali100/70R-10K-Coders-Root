import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export const Read = () => {

  const [items, setItems] = useState([]);

  let url = "http://localhost:3201/items"

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
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
           {items.map((item,i)=>{
            return <tr key={i}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>{item.image}</td>
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
