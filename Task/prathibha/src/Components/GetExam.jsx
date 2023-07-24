import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'

import { useNavigate } from "react-router-dom";

export const GetExam = () => {
 
  const navigate = useNavigate();
const Writeexam=()=>{
 
   
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

