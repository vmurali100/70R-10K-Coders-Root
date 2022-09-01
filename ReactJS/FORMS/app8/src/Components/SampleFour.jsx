import React,{useState} from 'react';

export const SampleFour = () => {
    const [teddy, setteddy] = useState({username:"",password:"",emailaddress:"",dateofbirth:"",height:"",weight:""})

     const handleChange=(e)=>{//synthetic element
        console.log(e.target.value)//to read element
        var inputname =e.target.name
        var newteddy ={...teddy}//creating an copy of object
        newteddy[inputname]=e.target.value
        setteddy(newteddy)

     }
     const handleSubmit=()=>{
        console.log(teddy)
    }
         
  return (
    <div>
        
       <form>
           
           <label htmlFor="username">Username :</label>
           <input type="text" name="username"value={teddy.username} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="password">Password :</label>
           <input type="text" name="password"value={teddy.password} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="emailaddress">Email Address :</label>
           <input type="text" name="email"value={teddy.emailaddress} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="dateofbirth">Date of Birth:</label> 
            <input type="text" name="dateofbirth" value={teddy.dateofbirth} onChange={(e)=>{handleChange(e)}} /><br/>
            <label htmlFor="height">Height :</label> 
            <input type="text" name="height" value={teddy.height} onChange={(e)=>{handleChange(e)}} /><br/>
            <label htmlFor="weight">Weight:</label> 
            <input type="text" name="weight" value={teddy.weight} onChange={(e)=>{handleChange(e)}} /><br/>
           
           <button onClick={handleSubmit} type="button">SUBMIT</button>

       </form>
    </div>
  )
}
