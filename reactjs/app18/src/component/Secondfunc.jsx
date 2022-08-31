import React, { useState } from 'react'

export const Secondfunc = () => {
    const [second, setsecond] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: ""

    })

    const handlefunction = (e) => {
        console.log(e.target.value)
        var inputname = (e.target.name)
        var newsecond = { ...second }
        newsecond[inputname] = e.target.value
        setsecond(newsecond)
    }

    const handlesend = () => {
        console.log(second)
    }
    return (
        <div>
            <p>Bootstrap 4 Form Validation Demo</p>
            <form >
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' value={second.name} onChange={(e) => { handlefunction(e) }} /><br />

                <label htmlFor="username">userName:</label>
                <input type="text" name='username' value={second.username} onChange={(e) => { handlefunction(e) }} /><br />

                <label htmlFor="email">email:</label>
                <input type="text" name='email' value={second.email} onChange={(e) => { handlefunction(e) }} /><br />

                <label htmlFor="password">password:</label>
                <input type="text" name='password' value={second.password} onChange={(e) => { handlefunction(e) }} /><br />

                <label htmlFor="confirmpassword">confirmpassword:</label>
                <input type="text" name='confirmpassword' value={second.confirmpassword} onChange={(e) => { handlefunction(e) }} /><br />

                <label htmlFor="message">message:</label>
                <input type="text" name='name' value={second.message} onChange={(e) => { handlefunction(e) }} /><br />

                <button onClick={handlesend} type="button">SEND</button>
            </form>
        </div>
    )
}
