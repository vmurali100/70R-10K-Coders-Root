import React,{useState} from 'react'

export const Users = () => {
  //const [firstName, setfirstName] = useState("")
  const [person, setperson] = useState({
    firstName:"",
    lastName:"",
    email:""
  })
  const handleChange=(e)=>{
console.log(e.target.value)
var inputname=e.target.name;
var newPerson={...person}
newPerson[inputname] = e.target.value
setperson(newPerson)
//setfirstName(e.target.value)
  }
  const handleSubmit=()=>{
    console.log(person)
  }
  return (
    <div>
      <form>
        <label htmlFor="FirstName">First Name :</label>
        <input type="text"name="first name"value={person.firstName} onChange={(e)=>{handleChange(e)}}/><br/>
        <label htmlFor="Lastame">Last Name :</label>
        <input type="text"name="last name"value={person.lastName} onChange={(e)=>{handleChange(e)}}/><br/>
        <label htmlFor="email">Email:</label>
        <input type="text"name="email"value={person.email} onChange={(e)=>{handleChange(e)}}/><br/>
        <button onClick={handleSubmit} type="button">Add User</button>
      </form>
    </div>
  )
}
