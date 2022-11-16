import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { userfreeexam, userpremiumexam, userVerify } from '../Store/userSlice'

const ExamsButton = () => {
    const navigate = useNavigate()
    const server_Key = "3w99V63pW7tJ7vavGXtCKo8cp"
    const Token= localStorage.getItem("Token")
    const Id= localStorage.getItem("Id")
    
    
    // console.log(ID, TOKEN)
    const [freeexam, setFreeexam] = useState({
        Id:Id,
        tokenu:Token,
        server_Key: server_Key 
    })
    const [premiumexam, setPremiumexam] = useState({
      Id:Id,
      tokenu:Token,
      server_Key: server_Key 
    })
    const dispatch = useDispatch()
    
    const handleFreeExams = async () => {
      const list= await dispatch(userfreeexam(freeexam))  
      if(list.payload.status===200){  
        navigate("/listfreeexams")     
      }             
   }
   const handlePremiumExams = async()=>{
         const premium = await dispatch(userpremiumexam(premiumexam))
         if(premium.payload.status===200){  
          navigate("/listpremiumexams")     
        } 
   }
  //  const handleResult = async()=>{
     
  //     const response = await fetch("https://e-prathibha.com/apis/my_result",{
  //       method: "POST",
  //       body: {"id":"1"},
        
  //       headers: {
          
  //         tokenu: "aogGWfBScC6RBQZpEBN2",
  //                 Id : 3602,
  //               server_key: "3w99V63pW7tJ7vavGXtCKo8cp"
  //       }

  //     },)
      
  //     const result = await response.json()
  //     console.log(result)
  //  }

  return (
    <div className='container'>

        <button type="button" className='btn btn-primary' onClick={handleFreeExams}>Free Exams</button> <br />
        <hr />
        <button type="button" className='btn btn-primary' onClick={handlePremiumExams}>Premium Exams</button> <br />
        <hr />
        {/* <button type="button" className='btn btn-primary' onClick={handleResult}>MY RESULT</button> */}
    </div>
  )
}

export default ExamsButton