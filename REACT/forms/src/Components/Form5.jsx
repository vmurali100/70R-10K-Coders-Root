import React,{useState} from 'react'

export const Form5 = () => {
   
    const [person, setperson] = useState({
        name:"",
        username:"",
        email:"",
        password:"",
        confirmpassword:"",
        message:""
    })
    const handleChange=(e)=>{
        console.log(e.target.value)
        var inputname = e.target.name 
       var newPerson ={...person}
        newPerson[inputname]=e.target.value 
        setperson(newPerson)
        
    }
    const handleSubmit=()=>{
        console.log(person)
    }
  return (
    <div>
        <h1>Form Validation Demo</h1>
        <form >
            <label htmlFor="name">Name</label>
            <input type="text" name='name' value={person.name} onChange={(e)=>{handleChange(e)}}/>
            <br />
            <label htmlFor="username">User Name</label>
            <input type="text" name='username' value={person.username} onChange={(e)=>{handleChange(e)}}/>
            <br />
            <label htmlFor="email">Email</label>
            <input type="text" name='email' value={person.email} onChange={(e)=>{handleChange(e)}}/>
            <br />
            <label htmlFor="password">Password</label>
            <input type="text" name='password' value={person.password} onChange={(e)=>{handleChange(e)}}/>
            <br />
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input type="text" name='confirmpassword' value={person.confirmpassword} onChange={(e)=>{handleChange(e)}}/>
            <br />
            <label htmlFor="message">Message</label>
            <input type="text" name='message' value={person.message} onChange={(e)=>{handleChange(e)}}/>
<br />

            <button onClick={handleSubmit} type="button">Send</button>
        </form>
    </div>
  )
}
