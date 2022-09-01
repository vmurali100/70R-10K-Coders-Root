import React from 'react'
import { useState } from 'react';

export const Function_Form1 = () => {
    const [person, setperson] = useState({
            street:"",
            city:"",
            state:"",
            zipcode:"",
            country:""
    })
   const handleChange=(Event)=>{
        var inputname = Event.target.name;
            var newPerson = {...person}
            newPerson[inputname] = Event.target.value;
            setperson({newPerson})
      }
      const handleSubmitt=()=>{ 
        console.log(person)
      }
      const handleReset=()=>{
        setperson({
            street:"",
            city:"",
            state:"",
            zipcode:"",
            country:""
        })
      }
  return (
    <div>
        <h2>ADDRESS</h2>
        
        <form>

        <label htmlFor="street">Street : </label>
        <input type="text" name="street" value={person.street} onChange={(Event)=>{handleChange(Event)}} /> 
        
        <br />
        <br />

        <label htmlFor="city">City : </label>
        <input type="text" name="city" value={person.city} onChange={(Event)=>{handleChange(Event)}} /> 
        <br />
        <br />

        <label htmlFor="state">State : </label>
        <input type="text" name="state" value={person.state} onChange={(Event)=>{handleChange(Event)}} /> 
        <br />
        <br />

        <label htmlFor="zipcode">Zipcode : </label>
        <input type="text" name="zipcode" value={person.zipcode} onChange={(Event)=>{handleChange(Event)}} />
         <br />
         <br />

        <label htmlFor="country">Country : </label>
        <input type="text" name="country" value={person.country} onChange={(Event)=>{handleChange(Event)}} />  
        <br />
        <br />

        <button onClick={handleSubmitt} type="button">Ok</button>
        
        <button onClick={handleReset} type="button">CANCEL</button>

       </form>


    </div>
  )
}
