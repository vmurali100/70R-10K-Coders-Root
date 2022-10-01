import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupUser } from '../store/userSlice';

export const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
const[name,setname] =useState('')
const[email,setemail] =useState('')
const[password,setpassword] =useState('')
const[confirmPassword,setconfirmPassword] =useState('')
const[phone,setphone] =useState('')
  const handleCreate = () => {
    console.table(name,email,phone,password,confirmPassword)
    
    dispatch(signupUser({name,email,phone,password,confirmPassword}));
    alert("Registered Successfully");
    navigate("/Verifyemail");
  };
  // const handlechange = (e) => {
  //   let newUser = { ...user };
  //   newUser[e.target.name] = e.target.value;
  //   setuser(newUser);
  // };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='container'> 
        <div className="w-75 mx-auto shadow p-5">
    <h1>Sign Up</h1>

    <hr /><form onSubmit={onSubmit}>
    
      <div className="form-group">
        <label htmlFor="" className="col-form-label">
         Name
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
      </div>
      
     
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
      <div className="form-group">
        <label htmlFor="" className="col-form-label">
         Confirm Password
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => {
            setconfirmPassword(e.target.value);
          }}
        />
      </div>
     
      <div className="form-group">
        <label htmlFor="" className="col-form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="phone"
          value={phone}
          onChange={(e) => {
            setphone(e.target.value);
          }}
        />
      </div>
    
      <br />
      <button
        onClick={handleCreate}
        type="button"
        className="btn btn-primary"
      >
       Sign Up
      </button>
      <Link to="/" className="btn btn-info" style={{marginLeft:"25px"}}> Cancel</Link>
      <p><Link to="/Verifyemail" > Want To Verify Your Email</Link></p>
    </form></div>
    </div>
  )
}
