import React,{useState} from 'react';

export const Function_Form5 = () => {
    const [person, setPerson] = useState({username:"",password:"",emailaddress:"",dateofbirth:"",height:"",weight:""})

     const handleChange=(e)=>{
        // console.log(e.target.value)
        var inputname =e.target.name
        var newPerson ={...person}
        newPerson[inputname]=e.target.value
        setPerson(newPerson)

     }
     const handleSubmit=()=>{
        console.log(person)
    }
         
  return (
    <div>
       <h2>Function</h2>
       <form>
           
           <label htmlFor="username">Username :</label>
           <input type="text" name="username" placeholder='Username' value={person.username} onChange={(e)=>{handleChange(e)}}/>
           <br/>
           <br/>
           <label htmlFor="password">Password :</label>
           <input type="text" name="password" placeholder='Password' value={person.password} onChange={(e)=>{handleChange(e)}}/> 
           <br/>
           <br/>
           <label htmlFor="emailaddress">Email Address :</label>
           <input type="text" name="emailaddress" placeholder='Email Address' value={person.emailaddress} onChange={(e)=>{handleChange(e)}}/> 
           <br/>
           <br/>
           <label htmlFor="dateofbirth">Date of Birth:</label> 
           <input type="text" name="dateofbirth" placeholder='Date of Birth' value={person.dateofbirth} onChange={(e)=>{handleChange(e)}} />
           <br/>
           <br/>
           <label htmlFor="height">Height :</label> 
           <input type="text" name="height" placeholder='Height' value={person.height} onChange={(e)=>{handleChange(e)}} />
           <br/>
           <br/>
           <label htmlFor="weight">Weight:</label> 
           <input type="text" name="weight"  placeholder='Weight'value={person.weight} onChange={(e)=>{handleChange(e)}} />
           <br/>
           <br/>
           
           <button onClick={handleSubmit} type="button">SUBMIT</button>

       </form>
    </div>
  )
}
