import React,{useState} from 'react'

export const Function_Form2 = () => {
const [person, setperson] = useState({firstName:"",lastName:"",dateofbirth:"",emailid:"",mobileNumber:""})
const handleChange=(e)=>{
  console.log(e.target.value)
  var inputName= e.target.name
  var newperson={...person}
  newperson[inputName]= e.target.value
  setperson(newperson)
}
const handleSubmit=()=>{
  console.log(person)
}
const handleReset=()=>{
  setperson({
    firstName:"",lastName:"",dateofbirth:"",emailid:"",mobileNumber:""})

    }

  return (
    <div>
        <h2>HTML FORM</h2>

          <form> 
            <label htmlFor="firstName">First Name:</label> 
            <input type="text" name="firstName" value={person.firstName} onChange={(e)=>{handleChange(e)}}/>
            <br/>
            <br />
            <label htmlFor="lastName">Last Name:</label> 
            <input type="text" name="lastName" value={person.lastName} onChange={(e)=>{handleChange(e)}}/>
            <br/>
            <br/>
            <label htmlFor="dateofbirth">Date of Birth:</label> 
            <input type="text" name="dateofbirth" value={person.dateofbirth} onChange={(e)=>{handleChange(e)}} />
            <br/>
            <br/>
            <label htmlFor="emailid">Email id:</label> 
            <input type="text" name="emailid" value={person.emailid} onChange={(e)=>{handleChange(e)}}/>
            <br/>
            <br/>
            <label htmlFor="mobileNumber">Mobile Number:</label> 
            <input type="text" name="mobileNumber" value={person.mobileNumber} onChange={(e)=>{handleChange(e)}}/>
            <br/>
            <br/>
            <button onClick={handleSubmit} type="button">SUBMIT</button>
            <button onClick={handleReset} type="button">RESET</button>

     
          </form>
    </div>
  )
  }
