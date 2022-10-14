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

  return (
    <div id="container">

        <button type="button" className='btn btn-danger' onClick={endExam}>End Exam</button>

        


    </div>
  )
}
