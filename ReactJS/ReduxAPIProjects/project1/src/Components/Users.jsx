import React from 'react'
import { useSelector } from 'react-redux'

export const Users = () => {

    const usersDetails = useSelector((state)=>state.users);
    console.log(usersDetails)
  return (
    <div>Users</div>
  )
}