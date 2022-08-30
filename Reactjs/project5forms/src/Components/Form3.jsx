import React,{useState} from 'react'

export const Form3 = () => {
    const [person, setPerson] = useState({
        person:{
            Name:"",
            UserName:"",
            Email:"",
            Password:"",
            ConfirmPassword:"",
            Message:""
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
        <h2>Bootstrap 4 Form Validation Demo </h2>
        <form>
        <label htmlFor="Name">Name : </label>
    <input type="text" name="Name" value={person.Name} onChange={(e)=>{handleChange(e)}}/> <br/>
    <label htmlFor="UserName">UserName : </label>
    <input type ="text" name="UserName" value={person.UserName} onChange={(e)=>{handleChange(e)}}/> <br/>
    <label htmlFor="Email">Email : </label>
    <input type="text" name="Email" value={person.Email} onChange={(e)=>{handleChange(e)}}/> <br/>
    <label htmlFor="Password">Password : </label>
    <input type ="text" name="Password" value={person.Password} onChange={(e)=>{handleChange(e)}}/> <br/>
    <label htmlFor="ConfirmPassword">Confirm Password : </label>
    <input type ="text" name="ConfirmPassword" value={person.ConfirmPassword} onChange={(e)=>{handleChange(e)}}/> <br/>
    <label htmlFor=" Message"> Message : </label>
    <input type ="text" name="Message" value={person.Message} onChange={(e)=>{handleChange(e)}}/> <br/>
    
    <button onClick={handleSubmit} type="button">Send</button>
    
    </form>
    </div>
  )
}
