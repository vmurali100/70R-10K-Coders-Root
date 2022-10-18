import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { userRegistration } from '../Store/Slice'

export const Register = () => {
    const [userDetails, setuserDetails] = useState({
        email: "",
        name: "",
        phone: "",
        password: "",
        confirmPassword: ""
    })
    const [error, seterror] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleChange = (e) => {
        let newUserDetails = { ...userDetails }
        newUserDetails[e.target.name] = e.target.value
        setuserDetails(newUserDetails)
    }
    const handleRegistration = async () => {
        const regStat = await dispatch(userRegistration(userDetails))
        if (regStat.payload.status === 200) {
            alert("User registered successfully")
            navigate("/verifyEmail")
        }
        else if (regStat.payload.status !== 200) {
            console.log(regStat.payload.data)
            seterror(regStat.payload.data)
            clearForm()
        }
    }
    const clearForm = () => {
        setuserDetails({
            email: "",
            name: "",
            phone: "",
            password: "",
            confirmPassword: ""
        })
    }
    return (
        <div className="container">
            <form>
                <h1>Welcome</h1>
                <p>Please fill out the below  form to create an account.</p>
                <hr />
                <div className='one'>
                    <label htmlFor="email">Email address :</label>
                    <input type="email" name='email' value={userDetails.email} onChange={(e) => handleChange(e)} />
                </div>
                <div className='one'>
                    <label htmlFor="name"> Name :</label>
                    <input type="text" name='name' value={userDetails.name} onChange={(e) => handleChange(e)} />
                </div>
                <div className='one'>
                    <label htmlFor="phone">Phone : </label>
                    <input type="phone" name='phone' value={userDetails.phone} onChange={(e) => handleChange(e)} />
                </div>
                <div className='one'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name='password' value={userDetails.password} onChange={(e) => handleChange(e)} />
                </div>
                <div className='one'>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" name='confirmPassword' value={userDetails.confirmPassword} onChange={(e) => handleChange(e)} />
                </div>
                <button type="button" className='btn btn-primary' onClick={handleRegistration}> Register</button>
                <button type="button" style={{ marginLeft: "20px" }} className='btn btn-primary' onClick={clearForm}>Clear All</button>
                <p style={{ marginTop: "25px" }}>Already have an account? <Link to="/" className='btn btn-primary'>Login</Link> </p>
            </form>
                <p style={{ color: "Red" }}>{error}</p>
        </div>
    )
}
