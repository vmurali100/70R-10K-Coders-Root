import React, { useState } from 'react'

export const Form = () => {
    // const [firstName, setfirstName] = useState("");    only one attribute declar chesinapudu
    const [person, setperson] = useState({
        street: "",
        city: "",
        zip: "",
        country: "",
    })

    const handleChange = (e) => {
        console.log(e.target.value)
        var inputname = e.target.name;
        var newPerson = { ...person };
        newPerson[inputname] = e.target.value

        setperson(newPerson)

        // setfirstName(e.target.value)

    }


    const handleok = () => {
        console.log(person)
    }
    const handlecancle = () => {
       setperson({
        street: "",
        city: "",
        zip: "",
        country: "",
    });
    }
    return (
        <div>
            <form >
                <label htmlFor="street">Street</label>
                <input type="text" name="street" value={person.street} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="city">city</label>
                <input type="text" name="city" value={person.city} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="zip">zip </label>
                <input type="text" name="zip " value={person.zip} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="country">country </label>
                <input type="text" name="country " value={person.country} onChange={(e) => { handleChange(e) }} /> <br />

                <button onClick={handleok} type="button">ok</button>
                <button onClick={handlecancle} type="button">cancle</button>
            </form>
            
        </div>
    )
}
