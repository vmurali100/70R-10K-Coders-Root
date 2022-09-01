import React from 'react'
import { useState } from 'react'

export const Fun1 = () => {
    const [person, setperson] = useState( {
        street : "",
        city : "",
        state : "",
        zip : "",
        country : "",
    })

    const handleChange=(event)=>{
        console.log(event.target.value);
        var inputname = event.target.name;
        var newPerson = {...person};
        newPerson[inputname] = event.target.value;
        setperson(newPerson)
    }

    const handleSubmit=()=>{
        console.log(person)
    }
  return (
    <div>
        <form>
            <label htmlFor="street">Street : </label>
            <input type="text" name="street" value={person.street} onChange={(event)=>{handleChange(event)}}  /> <br />
            <label htmlFor="city"> City : </label>
            <input type="text" name="city" value={person.city} onChange={(event)=>{handleChange(event)}} /> <br />
            <label htmlFor="state"> State : </label>
            <input type="text" name="state" value={person.state} onChange={(event)=>{handleChange(event)}} /> <br />
             <label htmlFor="zip">zip : </label>
           <input type="text" name="zip" value={person.zip} onChange={(event)=>{handleChange(event)}} /> <br />
            <label htmlFor="country"> Country : </label>
            <input type="text" name="country" value={person.country} onChange={(event)=>{handleChange(event)}} /> <br />

            <button onClick={handleSubmit}type="button">Okay</button>
            <button type="button">cancel</button>

            <hr />

        </form>
    </div>
  )
}