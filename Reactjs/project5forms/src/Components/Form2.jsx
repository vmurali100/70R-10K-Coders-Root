import React,{useState} from 'react'

export const Form2 = () => {
    const [person, setPerson] = useState({
        person:{
            firstName:"",
    lastName:"",
    DateOfBirth:"",
    emailid:"",
    MobileNumber:"",

        }
    })
    const handleChange=(e)=>{
        console.log(e.target.value)
        var inputname=e.target.name;
        var newPerson={...person}
        newPerson[inputname] = e.target.value
        setPerson(newPerson)
    }
    const handleSubmit=()=>{
        console.log(person)
      }
  return (
    <div>
        <hr/>
        <h2>HTML Form</h2>
    <form>
        <label htmlFor="FirstName">First Name :</label>
        <input type="text"name="first name"value={person.firstName} onChange={(e)=>{handleChange(e)}}/><br/>
        <label htmlFor="Lastname">Last Name :</label>
        <input type="text"name="last name"value={person.lastName} onChange={(e)=>{handleChange(e)}}/><br/>
        <label htmlFor="DateOfBirth">Date Of Birth :</label>
        <input type="text"name="Date Of Birth"value={person.DateOfBirth} onChange={(e)=>{handleChange(e)}}/><br/>
        <label htmlFor="emailid">Email Id:</label>
        <input type="text"name="email id"value={person.emailid} onChange={(e)=>{handleChange(e)}}/><br/>
        <label htmlFor="MobileNumber">Mobile Number:</label>
        <input type="text"name="Mobile Number"value={person.MobileNumber} onChange={(e)=>{handleChange(e)}}/><br/>
        <button onClick={handleSubmit} type="button">Submit</button>
        <button onClick={handleSubmit} type="button">Cancel</button>
      </form>
    </div>
  )
}
