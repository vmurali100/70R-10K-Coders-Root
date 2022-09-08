import React from 'react'
import { useEffect } from 'react'

export const Userfunc = () => {
   useEffect(()=>{
getAllusers()
   },[])
   const getAllusers=()=>{
    let url="http://filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
    axios.get(url).then((res)=>{
console.log(res.data)
    })
   }
  return (
    <div>Userfunc</div>
  )
}
