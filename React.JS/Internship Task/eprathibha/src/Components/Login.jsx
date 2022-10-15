import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { userLogin } from '../Store/Slice'

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

     const handleLogin = async () => {
      const stat = await dispatch(userLogin(loginDetails))
      console.log(stat.payload)
            if(stat.payload == "200"){
                navigate("/Afterlogin")
            }
            else {
                navigate("/")
            }
      
        // navigate("/Afterlogin")
    }


    return (
        <div className='container log' >

            <h2 style={{color:"white"}}>Hi Student ! </h2>
            <h3 style={{color:"white"}}>Please login to your account to start the exam.</h3>

            <hr />

            <form>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label email">Email address :</label>
                    <input type="email" className="form-control" required name='email' value={loginDetails.email} onChange={(e) => handleChange(e)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label"> Password :</label>
                    <input type="password" className="form-control" required name='password' value={loginDetails.password} onChange={(e) => handleChange(e)} />
                </div>

              

                <button type="button" className='btn btn-secondary' onClick={handleLogin}>LOGIN</button> <br />

                <p style={{ marginTop: "20px" }}> <i>New User ?</i> <Link to="/register" className='btn btn-secondary' style={{ marginLeft: "20px", marginTop: "0" }}> Register Here </Link></p>

                <p style={{ marginTop: "20px" }}> <i>Verify email ?</i> <Link to="/verfiyEmail" className='btn btn-secondary' style={{ marginLeft: "20px", marginTop: "0" }}> Verfiy </Link></p>

                <br />


            </form>
        </div>
    )
}
