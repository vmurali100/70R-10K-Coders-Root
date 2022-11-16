import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../Store/userSlice';
import { Link, useNavigate } from 'react-router-dom';


export const Signup = () => {
   
    const [signupDetails, setSignupDetails] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword:"",
        phone:""
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChange = e => {
        let newSignupDetails = { ...signupDetails }
        newSignupDetails[e.target.name] = e.target.value
        setSignupDetails(newSignupDetails)
    }
    
    
    const handleRegister =  async() => {
        const regdata = await dispatch(userRegister(signupDetails))
        if (regdata.payload.status===200){
            navigate("/verify")
         }
        
    }
    return (
        <div className='container' >
            <h1>Register</h1>
            <form>
            <div className="mb-3">
                    <label htmlFor="email" className="form-label">Name</label>
                    <input type="name" className="form-control" name='name' value={signupDetails.name} onChange={(e) => handleChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label email">Email address </label>
                    <input type="email" className="form-control" name='email' value={signupDetails.email} onChange={(e) => handleChange(e)} />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={signupDetails.password} onChange={(e) => handleChange(e)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name='confirmPassword' value={signupDetails.confirmPassword} onChange={(e) => handleChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">mobile number</label>
                    <input type="text" className="form-control" name='phone' value={signupDetails.phone} onChange={(e) => handleChange(e)} />
                </div>
                <button type="button" className='btn btn-secondary' onClick={handleRegister}>SignUp</button> <br />
                <br />
                <Link to="/" className='btn btn-primary'>Go Back</Link>
          </form>
    </div>
    )
}
