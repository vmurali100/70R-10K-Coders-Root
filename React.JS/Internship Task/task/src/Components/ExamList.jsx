
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export const ExamList = () => {

    const details = JSON.parse(localStorage.getItem("user"))

    console.log(details)

    const [exams, setExams] = useState([])

    const server_Key = "3w99V63pW7tJ7vavGXtCKo8cp"

    const id_key = details.data.Id

    console.log(id_key)

    const token_key = details.data.Token

    console.log(token_key)




    async function goToExam() {

        const response = await fetch("https://e-prathibha.com/apis/test_free_exam", {
            method: "POST",

            headers: {
                'id': id_key,
                "tokenu": token_key,
                "server_key": server_Key,

            }

        })

        const result = await response.json()

        console.log(result.data.exams)

        localStorage.setItem("exams", JSON.stringify(result.data.exams))

        setExams(result.data.exams)
    }

    console.log(exams)

    var okay = exams[0]
    console.log(okay)

    


    return (

        <div id='container' style={{ background: "lightBlue" }}>


            <button onClick={goToExam} type="button" className='btn btn-primary'>Go To Exam</button>

            
            <Link to="/questionslist" className="btn btn-primary" style={{ marginLeft: "20px" }}>Go to Questions page</Link>

        </div>
    )
}
