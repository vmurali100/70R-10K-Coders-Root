import React,{useState} from 'react'
import {  useNavigate } from 'react-router-dom'


export const End = () => {

    const navigate = useNavigate()
    const [dat, setdat] = useState({
        examId:"24",
        qno:"9"
    })

    const details = JSON.parse(localStorage.getItem("userData"))

    console.log(details)

    const server_Key = "3w99V63pW7tJ7vavGXtCKo8cp"

    const id_key = details.Id

    const token_key = details.Token

      async function endExam(){
        alert("Are you sure to stop and exit the examination?")
       const response = await fetch(" https://e-prathibha.com/apis/finishExam",{
            method : "POST",
            headers: {

                'id': id_key,
                "tokenu": token_key,
                "server_key": server_Key,
                "Content-Type" : "application/json"

            },
            body : JSON.stringify(dat)
        })

        const result = await response.json()

        console.log(result)

        navigate("/")
   }

  const y = JSON.parse(sessionStorage.getItem("urlID"))

  console.log(y)

   const handleCancel = () => {
    navigate(`/questionslisttwo/${y}`)
   }

  return (
    <div className="container end">

        <h2>Thankyou for attending the Exam !</h2>

        <h4>Are you sure that you want to end the exam ?</h4>

        <button type="button" className='btn btn-danger' onClick={endExam}>End Exam</button>

        <button type="button" className='btn btn-primary' onClick={handleCancel}>Go back to Exam</button>

        


    </div>
  )
}
