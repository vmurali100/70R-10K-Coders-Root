import React, { useEffect } from 'react'
import axios from 'axios';
import {useState} from 'react'

export const User = () => {
    const [users, setusers] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/users").then((res)=>{
            console.log(res.data);
            setusers(res.data);
            console.log(users);
        })
    },[])
  return (
    <div>
        <ul>
            {users.map((name,ind)=>{
                return <li key = {ind}>{name}</li>
            })}
        </ul>
    </div>
  )
}
