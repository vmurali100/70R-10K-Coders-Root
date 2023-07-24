import React from 'react'
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

export const Main = () => {
  
  const navigate = useNavigate();

  return (
    <div><h1>welcome</h1>
    <Link to="/Freeexamlist" className='btn btn-primary'>FreeExamList</Link>
    <Link to="/GetExam" className='btn btn-info'>Write Exam</Link>
    
    </div>
  )
}

