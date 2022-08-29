import React from 'react'
import { useState } from 'react'

export const Func4 = () => {
    const [dating, setdating] = useState({
        username : "",
        password : "",
        email : ""
    })

    const handleChange = (event) =>{
        console.log(event.target.value)
        var inputname = event.target.name
        var newDating = {...dating}
        newDating[inputname] = event.target.value
        setdating(newDating)
  }

  const handleSubmit = () =>{
      console.log(dating)
  }
  return (
    <div>
         <form>
            <label htmlFor="username">Username</label> <br />
            <input type="text" name="username" value={dating.username} onChange={(event)=>{handleChange(event)}} /> <br />
            <label htmlFor="password">Password</label> <br />
            <input type="text" name="password" value={dating.password} onChange={(event)=>{handleChange(event)}} /> <br />
            <label htmlFor="email">Email Address</label> <br />
            <input type="text" name="email" value={dating.email} onChange={(event)=>{handleChange(event)}} /> <br />
         
            <button type="button" onClick={handleSubmit}>Submit</button>
         </form>

    </div>
  )
}
