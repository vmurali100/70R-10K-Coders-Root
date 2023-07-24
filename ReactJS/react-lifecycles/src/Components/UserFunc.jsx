import React, { useEffect } from 'react'
import axios from 'axios'
export const UserFunc = () => {

    useEffect(()=>{
      getAllUsers()
    },[]) // Equal to Component Did Mount

    const getAllUsers = ()=>{
      let url = "https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
      axios.get(url).then((res)=>{
         console.log(res.data)
      })
    }
  return (
    <div>UserFunc</div>
  )
}
