import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from '../store/userSlice';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const[email,setemail] =useState('')
const[password,setpassword] =useState('')

  const handleCreate = () => {
    console.log(email,password)

    dispatch(loginUser({email,password}));
  
    alert("Logged in Successfully");
    navigate("/main");
  };
 
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='container'> 
        <div className="w-75 mx-auto shadow p-5">
    <h1>Login</h1>

    <hr /><form onSubmit={onSubmit}>
    
      
     
      <div className="form-group">
        <label htmlFor="" className="col-form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control form-control-lg"
          placeholder=""
          name="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="" className="col-form-label">
          Password
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
      </div>
      
     
      <br />
      <button
        onClick={handleCreate}
        type="button"
        className="btn btn-primary"
      >
       Sign In
      </button>
      <Link to="/" className="btn btn-info" style={{marginLeft:"25px"}}> Cancel</Link>
      <p><span><Link to="/Verifyemail" > Want To Verify Your Email</Link></span></p>
      <p><span><Link to="/Signup" > New User?.. Register Here</Link></span></p>
      
    </form></div>
    </div>
  )
}
