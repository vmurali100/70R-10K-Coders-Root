import axios from 'axios'
import React,{useState} from 'react'
import { useEffect } from 'react'

export const UserPosts = () => {
    const [users, setusers] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/users").then((response)=>{
            console.log(response.data);
            setusers(response.data);
        })
    },[])
  return (
    <div>
        {users.map((users,i)=>{
            return <p key={i}>{users}</p>
        })}
    </div>
  )
}
