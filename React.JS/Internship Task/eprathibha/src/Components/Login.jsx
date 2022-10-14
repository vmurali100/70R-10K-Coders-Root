import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'
import { userLogin } from '../Store/Slice'
import { useSelector } from "react-redux";

export const Login = () => {

   

    const [loginDetails, setLoginDetails] = useState({
        email : "",
        password:""
    })

    const handleChange = e => {
        let newLoginDetails = {...loginDetails}
        newLoginDetails[e.target.name] = e.target.value
        setLoginDetails(newLoginDetails)
    }

    

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleLogin = () => {
            dispatch(userLogin(loginDetails))
            navigate("/Afterlogin")
    }


    return (
        <div className='container'>

            <h2>Hi Student ! Please login to your account to start the exam.</h2>

            <hr />

            <form>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address :</label>
                    <input type="email" className="form-control" required name='email' value={loginDetails.email} onChange={(e) => handleChange(e)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label"> Password :</label>
                    <input type="password" className="form-control" required name='password' value={loginDetails.password} onChange={(e) => handleChange(e)} />
                </div>

                {/* <p>{msg}</p> */}

                <button type="button" className='btn btn-primary' onClick={handleLogin}>LOGIN</button> <br />

                <p style={{ marginTop: "20px" }}> <i>New User ?</i> <Link to="/register" className='btn btn-primary' style={{ marginLeft: "20px", marginTop: "0" }}> Register Here </Link></p>

                <p style={{ marginTop: "20px" }}> <i>Verify email ?</i> <Link to="/verfiyEmail" className='btn btn-primary' style={{ marginLeft: "20px", marginTop: "0" }}> Verfiy </Link></p>

                <br />


            </form>
        </div>
    )
}
