import React, { useEffect } from 'react'
import axios from 'axios'

export const Users = () => {
    useEffect(()=>{
        axios.get("http://localhost:3000/users").then
    },[])
  return (
    <div>Users</div>
  )
}
