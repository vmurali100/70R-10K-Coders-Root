import React,{useState,useEffect} from 'react'
import axios from 'axios'//axios:to get the data

export const Users = () => {
    const [users, setusers] = useState([])
    useEffect(()=>{//in function component to call ApI we will use this hook.
         axios.get("http://localhost:3000/users").then((res)=>{//get returns promise,need to use then
        console.log(res.data)
        setusers(res.data)//to display the data

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
