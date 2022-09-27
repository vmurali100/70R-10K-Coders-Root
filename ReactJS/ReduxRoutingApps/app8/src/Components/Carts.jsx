import React,{useState} from 'react'
import {Link, useNavigate,useParams} from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react';

export const Carts = () => {
  let url="http://localhost:3305/FakeCarts";
  const [carts, setcarts] = useState([]);
   
  let navigate = useNavigate()
  let objurl = useParams()

  const getData=()=>{
    axios.get(url).then((res)=>{
      localStorage.setItem("FakeCarts",JSON.stringify(res.data))
      setcarts(res.data)
    })
  }
  useEffect(()=>{
    getData()
  },[])

  
  return (
    <div>
     
      <table className='table' >
        <thead>
          <tr>
            <th>ID</th>
            <th>UserId</th>
            <th>Date</th>
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart,i)=> <tr key={i}>
            <td>{cart.id}</td>
            <td>{cart.userId}</td>
            <td>{cart.date}</td>
            <td>
        <Link to={`/details/${cart.id}`}><button type="button" className='btn btn-primary'>Details</button></Link>    
            </td>
            <td>
        <Link to={`/edit/${cart.id}`}><button type="button" className='btn btn-warning'>Edit</button></Link>    
            </td>
            <td>
        <Link to={`/delete/${cart.id}`}><button type="button" className='btn btn-danger'>Delete</button></Link>    
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}
