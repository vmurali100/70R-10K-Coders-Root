import React from 'react'
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom'
export const Freeexamlist = () => {
  
  const navigate = useNavigate();
const[user,setuser]=useState({
  name:'',
  email:'',
  phone:'',
  password:'',
  confirmPassword:'',
})
// const[name,setname] =useState('')
// const[email,setemail] =useState('')
// const[password,setpassword] =useState('')
// const[confirmPassword,setconfirmPassword] =useState('')
// const[phone,setphone] =useState('')

const handlechange = (e) => {
  let newUser = { ...user };
  newUser[e.target.name] = e.target.value;
  setuser(newUser);
};
  const handleexam=()=>{
    const details = JSON.parse(localStorage.getItem('user'))
    console.log(details)
    const server_key = "3w99V63pW7tJ7vavGXtCKo8cp"
    const id = details.data.Id 
    const tokenu = details.data.Token

console.log(id,tokenu)

    console.log(user)

    async function getexam(){
        const res = await fetch("https://e-prathibha.com/apis/test_free_exam/", {
                method: "POST",
                headers: {
                  "id": id,
                  "tokenu": tokenu,
                  // id:localStorage.getItem("id"),
                  "server_key": server_key,
                  // tokenu:localStorage.getItem("tokenu"),
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
            
                },
            
              })
              const result = await res.json()
    }


  }

  
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div><h1>Exams List</h1>
    
    <div>
    <form onSubmit={onSubmit}>
    
    <div className="form-group">
      <label htmlFor="" className="col-form-label">
       Name
      </label>
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder=""
        name="name"
        value={user.name}
        onChange={(e) => {
          handlechange(e);
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
        value={user.email}
        onChange={(e) => {
          handlechange(e);
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
        value={user.password}
        onChange={(e) => {
          handlechange(e);
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
        value={user.confirmPassword}
        onChange={(e) => {
          handlechange(e);
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
        value={user.phone}
        onChange={(e) => {
          handlechange(e);
        }}
      />
    </div>
  
    <br />
   
    <button type='button' onClick={handleexam} className="btn btn-info">Get</button>
<Link to="/main" className="btn btn-warning" style={{marginLeft:"25px"}}> Go Back</Link>
  </form>

   
    </div>
    </div>
  )
}

