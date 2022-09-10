import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'
export const Users = () => {
    const [users, setusers] = useState([])
    useEffect(()=>{
axios.get("http://localhost:3000/user").then((res)=>{
console.log(res.data)
setusers(res.data)
})
    },[])
  return (
    <div>
        <h2>Users</h2>
        <ul>
            {users.map((user)=>{
                // return <li key={user}>{user}</li>
                return <li key={user}>{user.firstname},{user.lastname},{user.id}</li>
            })}
        </ul>
        </div>
  )
}
