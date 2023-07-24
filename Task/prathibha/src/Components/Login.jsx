import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Login = () => {
 
  const navigate = useNavigate();

  const[email,setemail] =useState('')
const[password,setpassword] =useState('')

  const handleCreate = () => {
    console.log(email,password)

    let url = "https://e-prathibha.com/apis/login/";
    axios.post(url,{email,password}).then((res) => {
res=JSON.stringify(res)
JSON.parse(localStorage.getItem('data'))
const data = localStorage.getItem('data')
console.log(data)
        
 console.log(res)
//  res.data = data 
//  const data = localStorage.getItem('data')
//  console.log(data)
// localStorage.setItem("data",JSON.stringify(data))
        // const localStore = localStorage.getItem("data")
        // const response = JSON.parse(localStore)
        
    //     const data = response.json()
    //     data =JSON.parse(localStorage.getItem('data'))
    //   console.log(data)
        console.log("user added successfully");

    alert("Logged in Successfully");
  
    navigate("/main");
  })}
 
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
