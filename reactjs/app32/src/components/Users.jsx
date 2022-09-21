import React from 'react'
import { useSelector } from 'react-redux'

export const Users = () => {
  const userdetails = useSelector((state) => state.users)
  console.log(userdetails.users)
  return (
    <div>Users</div>
  )
}
