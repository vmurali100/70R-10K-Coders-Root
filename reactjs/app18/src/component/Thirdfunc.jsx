import React, { useState } from 'react'

export const Thirdfunc = () => {
    const [third, setthird] = useState({
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: ""
    })

    const handlefunction = (e) => {
        console.log(e.target.value)
        var inputname = (e.target.name)
        var newthird = { ...third }
        newthird[inputname] = e.target.value
        setthird(newthird)
    }
    const handleok=()=>{
        console.log(third)
    }

    const handlecancel=()=>{
        setthird({
            street: "",
            city: "",
            state: "",
            zipcode: "",
            country: ""  
        })
    }
    return (
        <div>
            <p> <h1>Address</h1></p>
            <form >
                <label htmlFor="street">street</label>
                <input type="text" name='street' value={third.street} onChange={(e) => handlefunction(e)} /><br />

                <label htmlFor="city">city , state</label>
                <input type="text" name='city' value={third.city} onChange={(e) => handlefunction(e)} />


                <label htmlFor="state"></label>
                <input type="text" name='state' value={third.state} onChange={(e) => handlefunction(e)} /><br />

                <label htmlFor="zipcode">zipcode</label>
                <input type="text" name='zipcode' value={third.zipcode} onChange={(e) => handlefunction(e)} /><br />

                <label htmlFor="country">country</label>
                <input type="text" name='country' value={third.country} onChange={(e) => handlefunction(e)} /><br />

                <button onClick={handleok} type="button">OK</button>
                <button onClick={handlecancel} type="button">Cancel</button>
            </form>
        </div>
    )
}
