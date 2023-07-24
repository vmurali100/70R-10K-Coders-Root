import React from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Finish } from '../store/userSlice';
import { useState } from "react";
export const Finishexam=()=>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let examId=24;
  let qno=2;
  const[body,setbody]=useState({
    examId:examId,
    qno:qno
  })
  const handleEnd=(e)=>{
    e.preventDefault()
    dispatch(Finish(body))
    alert("Exam Submitted Successfully")
    navigate('/GetFreeexamlist')
  }

  return(
<div>
  <center>
<h4>Are you sure that you want to finish the exam ?</h4>
<button type="button" style={{marginRight:"25px"}} className='btn btn-danger' onClick={handleEnd}>End Exam</button>
</center>
</div>
  )
}