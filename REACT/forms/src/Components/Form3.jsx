import React,{useState} from 'react'

export const Form3 = () => {
    // const [firstname, setfirstname] = useState("")
    const [person, setperson] = useState({
        username:"",
        password:"",
        emailaddress:"",
        dateofbirth:"",
        height:"",
        weight:""
    })
    const handleChange=(e)=>{
        console.log(e.target.value)
        var inputname = e.target.name 
       var newPerson ={...person}
        newPerson[inputname]=e.target.value 
        setperson(newPerson)
        // setfirstname(e.target.value)
    }
    const handleSubmit=()=>{
        console.log(person)
    }
  return (
    <div>
        <form >
            <label htmlFor="username">User Name</label>
            <input type="text" name='username' value={person.username} onChange={(e)=>{handleChange(e)}}/>
            <br />
            <label htmlFor="password">Password</label>
            <input type="text" name='password' value={person.password} onChange={(e)=>{handleChange(e)}}/>
            <br />
            <label htmlFor="emailaddress">Email Address</label>
            <input type="text" name='emailaddress' value={person.emailaddress} onChange={(e)=>{handleChange(e)}}/>
            <br />
            <label htmlFor="dateofbirth">Date Of Birth</label>
            <input type="text" name='dateofbirth' value={person.dateofbirth} onChange={(e)=>{handleChange(e)}}/>
            <br />
            <label htmlFor="height">Height</label>
            <input type="text" name='height' value={person.height} onChange={(e)=>{handleChange(e)}}/>
            <br />
            <label htmlFor="weight">Weight</label>
            <input type="text" name='weight' value={person.weight} onChange={(e)=>{handleChange(e)}}/>
<br />
            <button onClick={handleSubmit} type="button">Add User</button>
        </form>
    </div>
  )
}
