import React,{useState} from 'react';

export const Function_Form4 = () => {
    const [person, setPerson] = useState({name:"",userName:"",email:"",password:"",confirmPassword:"",message:""})

     const handleChange=(e)=>{
        // console.log(e.target.value)
        var inputname =e.target.name
        var newPerson ={...person}
        newPerson[inputname]=e.target.value
        setPerson(newPerson)

     }
     const handleSend=()=>{
        console.log(person)
    }
         
  return (
    <div>
        <h2>Function Bootstrap 4 Form Validation Demo</h2>
       <form>
           <label htmlFor='name'>Name :</label>
           <input type="text" name="name" placeholder="Name" value={person.name} onChange={(e)=>{handleChange(e)}} /> 
           <br/>
           <br/>
           <label htmlFor="userName">UserName :</label>
           <input type="text" name="userName" placeholder="UserName" value={person.userName} onChange={(e)=>{handleChange(e)}}/> 
           <br/>
           <br/>
           <label htmlFor="email">Email :</label>
           <input type="text" name="email" placeholder="Email" value={person.email} onChange={(e)=>{handleChange(e)}}/> 
           <br/>
           <br/>
           <label htmlFor="password">Password :</label>
           <input type="text" name="password" placeholder="Password" value={person.password} onChange={(e)=>{handleChange(e)}}/> 
           <br/>
           <br/>
           <label htmlFor=" confirmPassword"> Confirm Password :</label>
           <input type="text" name=" confirmPassword" placeholder="Confirm Password" value={person.confirmPassword} onChange={(e)=>{handleChange(e)}}/> 
           <br/>
           <br/>
           <label htmlFor="message">Message :</label>
           <input type="text" name="message" placeholder="Message" value={person.message} onChange={(e)=>{handleChange(e)}}/> 
           <br/>
           <br/>

           <button onClick={handleSend} type="button">SEND</button>

       </form>
    </div>
  )
}
