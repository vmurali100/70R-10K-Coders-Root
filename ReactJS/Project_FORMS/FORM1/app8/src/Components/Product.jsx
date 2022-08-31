import React,{useState} from 'react'

export const Product = () => {
const [person, setperson] = useState({fname:"",lname:"",dateofbirth:"",emailid:"",mobileNumber:""})
const handleChange=(e)=>{
  console.log(e.target.value)
  var inputName= e.target.value
  var newperson={...person}
  newperson[inputName]= e.target.value
  setperson(newperson)
  console.log(inputName)
}
const handleSubmit=()=>{
  console.log(person)
}
const handleReset=()=>{
  console.log(person)
}

  return (
    <div>
          <form> 
            <label htmlFor="firstName">First Name:</label> 
            <input type="text" name="firstName" value={person.firstname} onChange={(e)=>{handleChange(e)}}/><br/>
            <label htmlFor="lastName">Last Name:</label> 
            <input type="text" name="lastName" value={person.lastname} onChange={(e)=>{handleChange(e)}}/><br/>
            <label htmlFor="dateofbirth">Date of Birth:</label> 
            <input type="text" name="dateofbirth" value={person.dateofbirth} onChange={(e)=>{handleChange(e)}} /><br/>
            <label htmlFor="emailid">Email id:</label> 
            <input type="text" name="emailid" value={person.emailid} onChange={(e)=>{handleChange(e)}}/><br/>
            <label htmlFor="mobileNumber">Mobile Number:</label> 
            <input type="text" name="mobileNumber" value={person.mobileNumber} onChange={(e)=>{handleChange(e)}}/><br/>
            <button onClick={handleSubmit} type="button">Submit</button>
            <button onClick={handleReset} type="button">Reset</button>

     
          </form>
    </div>
  )
}
