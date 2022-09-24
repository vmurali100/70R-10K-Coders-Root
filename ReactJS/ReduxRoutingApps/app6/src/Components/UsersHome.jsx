import React,{useState} from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export const UsersHome = () => {
    let url='http://localhost:3210/Users';
    const [UserArray, setUserArray] = useState([])

  const getData=()=>{
    axios.get(url).then((res)=>{
        setUserArray(res.data)
        localStorage.setItem('ReactUsers',JSON.stringify(res.data))
    })
}
    useEffect(()=>{
        getData()
    },[])
  

    
  return (
    <div className='container'>
        <Link to={'/create'} className='btn btn-primary'>Create</Link>
        <table className="table table-striped">
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        {UserArray.map((usr,i)=> <tr key={i}>
            <td>{usr.id}</td>
            <td>{usr.name}</td>
            <td>{usr.username}</td>
            <td>{usr.email}</td>
            <td><Link to={`/edit/${usr.id}`}> <button className='btn btn-primary'>Edit</button> </Link> </td>
            <td><Link to={`/delete/${usr.id}`}> <button className='btn btn-primary'>Delete</button> </Link> </td>
        </tr>)}
    </tbody>
</table>
    </div>
  )
}
