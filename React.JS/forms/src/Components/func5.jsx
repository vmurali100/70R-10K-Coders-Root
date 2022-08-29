import React from 'react'
import { useState } from 'react'

export const Func5 = () => {
    const [fifth, setfifth] = useState({
        name: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: ""
    })

    const handleChange = (event) => {
        console.log(event.target.value)
        var inputname = event.target.name
        var newFifth = { ...fifth }
        newFifth[inputname] = event.target.value
        setfifth(newFifth)
    }

    const handleSubmit = () => {
        console.log(fifth)
    }
    return (
        <div>

            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" name="name" value={fifth.name} onChange={(event) => { handleChange(event) }} /> <br />
                <label htmlFor="userName">Username</label> <br />
                <input type="text" name="userName" value={fifth.userName} onChange={(event) => { handleChange(event) }} /> <br />
                <label htmlFor="email">Email</label> <br />
                <input type="text" name="email" value={fifth.email} onChange={(event) => { handleChange(event) }} /> <br />
                <label htmlFor="password">Password</label> <br />
                <input type="text" name="password" value={fifth.password} onChange={(event) => { handleChange(event) }} /> <br />
                <label htmlFor="confirmPassword">Confirm Password</label> <br />
                <input type="text" name="confirmPassword" value={fifth.confirmPassword} onChange={(event) => { handleChange(event) }} /> <br />
                <label htmlFor="message">Message</label> <br />
                <textarea name="message" value={fifth.message} onChange={(event) => { handleChange(event) }}></textarea> <br />

                <button type="button" onClick={handleSubmit}>Submit</button>
           </form>
        </div>
    )
}
