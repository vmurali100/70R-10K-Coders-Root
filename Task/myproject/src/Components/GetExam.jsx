import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Getquestions } from '../store/userSlice';
export const GetExam = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const Writeexam=()=>{
 
    dispatch(Getquestions())
  }
  
  return (
    <div><h1>Exam</h1>
    
    <div>
    
   <button type='button' onClick={Writeexam} className="btn btn-primary" >Write Exam</button>
   <Link to="/main" className="btn btn-warning" style={{marginLeft:"25px"}}> Back</Link>
    </div>
    </div>
  )
}

