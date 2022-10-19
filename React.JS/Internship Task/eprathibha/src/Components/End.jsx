import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const End = () => {
  const y = JSON.parse(sessionStorage.getItem("urlID")) //Retreiving the value of the exam id stored in session storage
  console.log(y)
  const x = JSON.parse(sessionStorage.getItem("quesNum"))
  console.log(x)
  const navigate = useNavigate()
  const [dat, setdat] = useState({
    examId: y,
    qno: x
  })
  const details = JSON.parse(localStorage.getItem("userData"))
  console.log(details)
  const server_Key = "3w99V63pW7tJ7vavGXtCKo8cp"
  const id_key = details.Id
  const token_key = details.Token
  console.log(dat)
  const endExam = async () => {
    try {
      const response = await fetch("https://e-prathibha.com/apis/finishExam", {
        method: "POST",
        headers: {
          'id': id_key,
          "tokenu": token_key,
          "server_key": server_Key,
          "Content-type": "application/json"
        },
        body: JSON.stringify(dat),
      })
      const result = await response.json()
      console.log(result)
      if (result.status == "200") {
        alert("Are you sure to stop and exit the examination?")
        navigate("/")
      }
      else {
        console.log(result.data)
      }
    }
    catch {
      console.log("Error")
    }
  }
  console.log(y)
  const handleCancel = () => {
    navigate(`/questionslisttwo/${y}`)
  }
  return (
    <div className="container end">
      <h2>Thankyou for attending the Exam !</h2>
      <h4>Are you sure that you want to end the exam ?</h4>
      <button type="button" style={{ marginRight: "25px" }} className='btn btn-danger' onClick={endExam}>End Exam</button>
      <button type="button" className='btn btn-primary' onClick={handleCancel}>Go back to Exam</button>
    </div>
  )
}
