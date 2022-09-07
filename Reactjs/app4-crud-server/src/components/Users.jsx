import React, {useState, useEffect } from 'react'
import axios from 'axios'
export const Users = () => {
    const [users, setusers] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/users").then((res)=>{
            console.log(res.data)
            setusers(res.data)
        })
    },[])
  return (
    <div>
        <h2>Users</h2>
        <ul>
            {users.map((user)=>{
                return <li key={user}>{user}</li>
            })}
        </ul>
        </div>
  )
}
