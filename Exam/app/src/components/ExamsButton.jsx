import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userfreeexam, userpremiumexam, userVerify } from '../Store/userSlice'

const ExamsButton = () => {
    const server_Key = "3w99V63pW7tJ7vavGXtCKo8cp"
    const Token= localStorage.getItem("Token")
    const Id= localStorage.getItem("Id")
    
    
    // console.log(ID, TOKEN)
    const [freeexam, setFreeexam] = useState({
        Id:Id,
        tokenu:Token,
        server_Key: server_Key 
    })
    const dispatch = useDispatch()
    const handleFreeExams = () => {
        dispatch(userfreeexam(freeexam))        
   }
   const handlePremiumExams =()=>{
          dispatch(userpremiumexam(freeexam))
   }

  return (
    <div className='container'>

        <button type="button" className='btn btn-primary' onClick={handleFreeExams}>Free Exams</button> <br />
        <hr />
        <button type="button" className='btn btn-primary' onClick={handlePremiumExams}>Premium Exams</button> <br />
    </div>
  )
}

export default ExamsButton