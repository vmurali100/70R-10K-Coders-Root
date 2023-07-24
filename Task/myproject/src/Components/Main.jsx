import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    
    <div>
      <center><h1>welcome</h1>
    <Link to="/GetFreeexamlist" className='btn btn-primary'>FreeExamList</Link>
    <Link to="/GetExam" className='btn btn-info'  style={{marginLeft:"25px"}}>Write Exam</Link>
    </center>
    </div>
  )
}

