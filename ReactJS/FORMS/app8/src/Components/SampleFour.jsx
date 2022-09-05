import React,{useState} from 'react';

export const SampleFour = () => {
    const [user, setuser] = useState({username:"",password:"",emailaddress:"",dateofbirth:"",height:"",weight:""})

     const handleChange=(e)=>{//synthetic element
        console.log(e.target.value)//to read element
        var inputname =e.target.name
        var newuser ={...user}//creating an copy of object
        newuser[inputname]=e.target.value
        setuser(newuser)

     }
     const handleSubmit=()=>{
        console.log(user)
    }
         
  return (
    <div>
        
       <form>
           
           <label htmlFor="username">Username :</label>
           <input type="text" name="username"value={user.username} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="password">Password :</label>
           <input type="text" name="password"value={user.password} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="emailaddress">Email Address :</label>
           <input type="text" name="email"value={user.emailaddress} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="dateofbirth">Date of Birth:</label> 
            <input type="text" name="dateofbirth" value={user.dateofbirth} onChange={(e)=>{handleChange(e)}} /><br/>
            <label htmlFor="height">Height :</label> 
            <input type="text" name="height" value={user.height} onChange={(e)=>{handleChange(e)}} /><br/>
            <label htmlFor="weight">Weight:</label> 
            <input type="text" name="weight" value={user.weight} onChange={(e)=>{handleChange(e)}} /><br/>
           
           <button onClick={handleSubmit} type="button">SUBMIT</button>

       </form>
    </div>
  )
}
