import React from 'react'
import { useState } from 'react'

export const User3 = () => {
    const [Person, setPerson] = useState({
        firstName:"",
        lastName:"",
        emailId:"",
        password:"",
    })

   const handlePerson=(e)=>{
       var input = e.target.name;
       var newPerson = {...Person};
       newPerson[input] = e.target.value;
       setPerson(newPerson);
    }

    const handleSubmit=(e)=>{
        console.log(Person);
    }

  return (
    <div>
        <form action="">
            <label htmlFor="">FirstName : </label>
            <input type="text" name="firstName" value={Person.firstName} onChange={(e)=>{handlePerson(e)}}/> <br />
            <label htmlFor="">LastName : </label>
            <input type="text" name="lastName" value={Person.lastName} onChange={(e)=>{handlePerson(e)}}/> <br />
            <label htmlFor="">Email Id : </label>
            <input type="text" name="emailId" value={Person.emailId} onChange={(e)=>{handlePerson(e)}}/> <br />
            <label htmlFor="">Password : </label>
            <input type="text" name="password" value={Person.password} onChange={(e)=>{handlePerson(e)}}/> <br />
            <button type="button" onClick={handleSubmit}>AddUser</button>
        </form>
    </div>
  )
}
