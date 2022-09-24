import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export const Read = () => {

  const [carts, setcarts] = useState([]);

  let url = "http://localhost:3000/carts"

  useEffect(()=>{
      axios.get(url).then((response)=>{
        localStorage.setItem("carts",JSON.stringify(response.data))
        setcarts(response.data);
      })  
  },[])

  return (
    <div >
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Date</th>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
           {carts.map((item,i)=>{
            
            return <tr key={i}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.date}</td>
              <td>{item.products.productId}</td>
              <td>{item.products.quantity}</td>
             
              
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
