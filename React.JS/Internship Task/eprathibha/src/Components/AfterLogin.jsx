import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AfterLogin = () => {
    const navigate = useNavigate()
    const showExamPage=()=>{
        navigate("/Examlist")
    }
return (
    <div className='container login' >
        <button className='btn btn-light' type="button" onClick={showExamPage}>Go to Exam List page</button>
    </div>
  )
}
