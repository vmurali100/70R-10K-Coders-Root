import React, { useState } from 'react'
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export const Registration = () => {

    const navigate = useNavigate()
    const [reg, setReg] = useState({
        email: "",
        name: "",
        phone: "",

        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        let newreg = { ...reg }
        newreg[e.target.name] = e.target.value
        setReg(newreg)
    }

    async function handleRegistration() {
        const response = await fetch("https://e-prathibha.com/apis/register", {
            method: "POST",
            body: JSON.stringify(reg),
            headers : {
                'Content-type' : "application/json"
            }
            

        });
        const result = await response.json()
        console.log(result)
        navigate("/verifyemail")
    }


    const clearForm = () => {
        setReg({
            email: "",
            name: "",
            phone: "",

            password: "",
            confirmPassword: ""
        })
    }


    return (
        
        <div id="container">

            <form>

                <h1>Welcome</h1>

                <p>Please fill out the below  form to create an account.</p>

                <hr/>

                <div className='one'>
                    <label htmlFor="email">Email address :</label>
                    <input type="email"  name='email' value={reg.email} onChange={(e) => handleChange(e)} />
                </div>

              

                <div className='one'>
                    <label htmlFor="name"> Name :</label>
                    <input type="text"  name='name' value={reg.name} onChange={(e) => handleChange(e)} />
                </div>

                <div className='one'>
                    <label htmlFor="phone">Phone : </label>
                    <input type="phone"  name='phone' value={reg.phone} onChange={(e) => handleChange(e)} />
                </div>


               <div className='one'>
                    <label htmlFor="password">Password:</label>
                    <input type="password"  name='password' value={reg.password} onChange={(e) => handleChange(e)} />
                </div>

                <div className='one'>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password"  name='confirmPassword' value={reg.confirmPassword} onChange={(e) => handleChange(e)} />
                </div>

                <button type="button" className='btn btn-primary' onClick={handleRegistration}> Register</button>

                <button type="button" style={{ marginLeft: "20px" }} className='btn btn-primary' onClick={clearForm}>Clear All</button>

                <p style={{marginTop:"25px"}}>Already have an account? <Link to="/" className='btn btn-primary'>Login</Link> </p>
            </form>
        </div>
    )
}
