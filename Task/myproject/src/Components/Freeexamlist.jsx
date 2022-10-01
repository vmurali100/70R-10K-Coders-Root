import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Freeexam } from '../store/userSlice';
import { Link } from 'react-router-dom'
export const Freeexamlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const[body,setbody]=useState({
  name:'',
  email:'',
  phone:'',
  password:'',
  confirmPassword:'',
})
  const handleexam=(body)=>{
    

dispatch(Freeexam(body))

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
        value={body.name}
        onChange={(e) => {
          setbody(e.target.value);
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
        value={body.email}
        onChange={(e) => {
          setbody(e.target.value);
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
        value={body.password}
        onChange={(e) => {
          setbody(e.target.value);
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
        value={body.confirmPassword}
        onChange={(e) => {
          setbody(e.target.value);
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
        value={body.phone}
        onChange={(e) => {
          setbody(e.target.value);
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

