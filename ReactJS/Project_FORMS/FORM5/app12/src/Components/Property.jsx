import React,{useState} from 'react';

export const Property = () => {
    const [data, setdata] = useState({username:"",password:"",emailaddress:"",dateofbirth:"",height:"",weight:""})

     const handleChange=(e)=>{//synthetic element
        console.log(e.target.value)//to read element
        var inputname =e.target.name
        var newdata ={...data}//creating an copy of object
        newdata[inputname]=e.target.value
        setdata(newdata)

     }
     const handleSubmit=()=>{
        console.log(data)
    }
         
  return (
    <div>
        
       <form>
           
           <label htmlFor="username">Username :</label>
           <input type="text" name="username"value={data.username} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="password">Password :</label>
           <input type="text" name="password"value={data.password} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="emailaddress">Email Address :</label>
           <input type="text" name="email"value={data.emailaddress} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="dateofbirth">Date of Birth:</label> 
            <input type="text" name="dateofbirth" value={data.dateofbirth} onChange={(e)=>{handleChange(e)}} /><br/>
            <label htmlFor="height">Height :</label> 
            <input type="text" name="height" value={data.height} onChange={(e)=>{handleChange(e)}} /><br/>
            <label htmlFor="weight">Weight:</label> 
            <input type="text" name="weight" value={data.weight} onChange={(e)=>{handleChange(e)}} /><br/>
           
           <button onClick={handleSubmit} type="button">SUBMIT</button>

       </form>
    </div>
  )
}

