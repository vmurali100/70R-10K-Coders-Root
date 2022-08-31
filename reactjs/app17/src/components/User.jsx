import React, { useState } from 'react'

export const User = () => {
  // const [ajay, setajay] = useState("");
  const [ajay, setajay] = useState({
    firstname: "",
    lastname: "",
    email: ""
  })

  const handlefunction = (e) => {
    console.log(e.target.value)
    var inputname = e.target.name
    var newperson = { ...ajay };
    newperson[inputname] = e.target.value
    setajay(newperson)
    // console.log(inputname)
    // setajay(e.target.value)
  }

  const handlesubmit = () => {
    console.log(ajay)
  }
  return (
    <div>
      <form >
        <label htmlFor="firstname">firstname :</label>
        <input type="text" name="firstname" value={ajay.firstname} onChange={(e) => { handlefunction(e) }} /><br />
        <label htmlFor="lastname">lastname :</label>
        <input type="text" name="lastname" value={ajay.lastname} onChange={(e) => { handlefunction(e) }} /><br />
        <label htmlFor="email" >email:</label>
        <input type="text" name="email" value={ajay.email} onChange={(e) => { handlefunction(e) }} />
        <button onClick={handlesubmit} type="button">add user</button>
      </form>
    </div>
  )
}
