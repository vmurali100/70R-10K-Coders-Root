import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AfterLogin = () => {
    const navigate = useNavigate()

    const showExamPage=()=>{
        navigate("/Examlist")
    }

    const showQuestionsPage=()=>{
        navigate("/Questionslist")
    }
  return (
    <div className='container login' >
        <button className='btn btn-light' type="button" onClick={showExamPage}>Go to Exam List page</button>
        <button style={{marginLeft:"25px"}} className='btn btn-light' type="button" onClick={showQuestionsPage}>Go to Questions List page</button>
    </div>
  )
}
