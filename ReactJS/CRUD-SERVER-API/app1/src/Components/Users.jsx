import React, { useEffect } from 'react'
import axios from 'axios'

export const Users = () => {
    useEffect(()=>{
        axios.get("http://www.filltext.com/?rows=1&fname={manasa}&lname={madupu}&pretty=true").then
    },[])
  return (
    <div>Users</div>
  )
}
