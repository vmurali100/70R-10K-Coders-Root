import React, { useState } from 'react'

export const User = () => {
  // const [person, setperson] = useState("");
  const [person, setperson] = useState({
    firstname: "",
    lastname: "",
    email: ""
  })

  const handlefunction = (e) => {
    console.log(e.target.value)
    var inputname = e.target.name
    var newperson = { ...person };
    newperson[inputname] = e.target.value
    setperson(newperson)
    // console.log(inputname)
    // setperson(e.target.value)
  }

  const handlesubmit = () => {
    console.log(person)
  }
  return (
    <div>
      <form >
        <label htmlFor="firstname">firstname :</label>
        <input type="text" name="firstname" value={person.firstname} onChange={(e) => { handlefunction(e) }} /><br />
        <label htmlFor="lastname">lastname :</label>
        <input type="text" name="lastname" value={person.lastname} onChange={(e) => { handlefunction(e) }} /><br />
        <label htmlFor="email" >email:</label>
        <input type="text" name="email" value={person.email} onChange={(e) => { handlefunction(e) }} />
        <button onClick={handlesubmit} type="button">add user</button>
      </form>
    </div>
  )
}
