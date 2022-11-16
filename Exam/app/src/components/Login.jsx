import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../Store/userSlice';
import { Link, useNavigate } from 'react-router-dom';


export const Login = () => {
    const data = useSelector((state) => state.data)

    console.log(data)
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        let newLoginDetails = { ...loginDetails }
        newLoginDetails[e.target.name] = e.target.value
        setLoginDetails(newLoginDetails)
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleLogin =  async () => {
         const loginreturn = await dispatch(userLogin(loginDetails))
         console.log(loginreturn);
         if (loginreturn.payload.status===200){
            navigate("/list")
         }
    }
    return (
        <div className='container' >
            <h1>Login</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label email">Email address </label>
                    <input type="email" className="form-control" name='email' value={loginDetails.email} onChange={(e) => handleChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"> Password </label>
                    <input type="password" className="form-control" name='password' value={loginDetails.password} onChange={(e) => handleChange(e)} />
                </div>
                <button type="button" className='btn btn-secondary' onClick={handleLogin}>LOGIN</button> <br />
                <br />
                <Link to="/register" className="btn btn-primary">Register</Link>
                <br />
                <br />
                <Link to="/verify" className="btn btn-primary">Verify Email</Link>
          </form>
    </div>
    )
}
