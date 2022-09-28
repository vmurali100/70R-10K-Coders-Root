import React,{useState} from 'react'
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

export const Filletext1 = () => {
    const url ='http://localhost:3201/filltext1';
    const param=useParams();
    const navigate=useNavigate();
    const [Data, setData] = useState([])
    useEffect(()=>{
        axios.get(url).then((res)=>{
            setData(res.data)
            localStorage.setItem('Filltext1',JSON.stringify(res.data))
        })
    },[])

    
  return (
    <div>
        <table className="table table-striped-columns">
  <thead>
   <tr>
    <th>Id</th>
    <th>Email</th>
    <th>Username</th>
    <th>Password</th>
    <th>City</th>
    <th>State</th>
    <th>Edit</th>
    <th>Delete</th>
   </tr>
  </thead>
  <tbody>
    {Data.map((mem,i)=> <tr key={i}>
        <td>{mem.id}</td>
        <td>{mem.email}</td>
        <td>{mem.username}</td>
        <td>{mem.password}</td>
        <td>{mem.address.city}</td>
        <td>{mem.address.state}</td>
        <td>
            <Link to={`/edit/${mem.id}`}> <button type='button' className='btn btn-warning'>Edit</button>  </Link>
        </td>
        <td>
            <Link to={`/delete/${mem.id}`}> <button type='button' className='btn btn-danger'>Delete</button>  </Link>
        </td>
    </tr>)}
  </tbody>
</table>
    </div>
  )
}
