import React from 'react'
import { useState } from 'react'

export const Func3 = () => {

    const [third, setthird] = useState({
        firstName : "",
        lastName : "",
        dob : "",
        email : "",
        phone : ""
    })

    const handleChange = (event) =>{
        console.log(event.target.value)
        var inputname = event.target.name
        var newThird = {...third}
        newThird[inputname] = event.target.value
        setthird(newThird)
  }

  const handleSubmit = () =>{
      console.log(third)
  }

  const handleReset = () =>{
    setthird( {
        firstName : "",
        lastName : "",
        dob : "",
        email : "",
        phone : ""

    })
  }
  return (
    <div>
        <form>
                <h2>HTML Form</h2>
                <label htmlFor="firstName"> First Name : </label>
                <input type="text" name="firstName" value={third.firstName} onChange={(event)=>{handleChange(event)}} /> <br />
                <label htmlFor="lastName"> Last Name : </label>
                <input type="text" name="lastName" value={third.lastName} onChange={(event)=>{handleChange(event)}} /> <br />
                <label htmlFor="dob"> Date Of Birth : </label>
                <input type="text" name="dob" value={third.dob} onChange={(event)=>{handleChange(event)}} /> <br />
                <label htmlFor="email"> Email Id : </label>
                <input type="text" name="email" value={third.email} onChange={(event)=>{handleChange(event)}} /> <br />
                <label htmlFor="phone"> Mobile Number : </label>
                <input type="text" name="phone" value={third.phone} onChange={(event)=>{handleChange(event)}} /> <br />

               <button type="button" onClick={handleSubmit}>Submit</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </form>


    </div>
  )
}
