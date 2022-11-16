import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { displayquestions } from '../Store/userSlice'
import { useNavigate } from 'react-router-dom'

const FreeExamQuestions = () => {
    const navigate = useNavigate()
       const urlId= useParams()
       const ID = urlId.id
       const dispatch = useDispatch()
       const handleButton = async()=>{
        const questionData = await dispatch(displayquestions(ID))

        if(questionData.payload.status===200){
            navigate("/listquestions")
          }             
       }
  return (
    <div>
        <button type="button" className='btn btn-primary' onClick={handleButton}>GET QUESTIONS</button>
        </div>
      ) 
}

export default FreeExamQuestions