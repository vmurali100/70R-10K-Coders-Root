import React, { useState } from 'react'


export const Fourthfunc = () => {
    const [fourth, setfourth] = useState({
        username: "",
        password: "",
        emailaddress: "",

    })
    const handlechange = (e) => {
        console.log(e.target.value)
        var inputname = (e.target.name)
        var newfourth = { ...fourth }
        newfourth[inputname] = e.target.value
        setfourth(newfourth)
    }
    const handleok=()=>{
        console.log(fourth)
    }
    return (
        <div>
            <form >
                <label htmlFor="username">username</label>
                <input type="text" name='username' value={fourth.username} onChange={(e) => {handlechange(e)}} /><br/>

                <label htmlFor="password">password</label>
                <input type="text" name='password' value={fourth.password} onChange={(e) => {handlechange(e)}} /><br/>

                <label htmlFor="emailaddress">emailaddress</label>
                <input type="text" name='emailaddress' value={fourth.emailaddress} onChange={(e) => {handlechange(e)}} /><br/>

                <button onClick={handleok} type="button">OK</button>
            </form>
        </div>
    )
}
