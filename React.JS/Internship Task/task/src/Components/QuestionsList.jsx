
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { EndExam } from './EndExam'



export const QuestionsList = () => {

    const [questions, setquestions] = useState([])

    const navigate = useNavigate()


    const details = JSON.parse(localStorage.getItem("user"))

    console.log(details)



    const server_Key = "3w99V63pW7tJ7vavGXtCKo8cp"

    const id_key = details.data.Id

    console.log(id_key)

    const token_key = details.data.Token

    console.log(token_key)


    async function getQuestions() {
        const response = await fetch("https://e-prathibha.com/apis/start_exam?examId=24", {
            method: "GET",
            headers: {

                'id': id_key,
                "tokenu": token_key,
                "server_key": server_Key,

            }
        })

        const result = await response.json() //Converting the response in JSON format

        console.log(result)

        setquestions(result.data.exam) //storing the required data in questions state

        console.log(questions)

        console.log(typeof (questions))

        //Displaying the questions using the below dynamic html elements

        for (let i = 1; i <= questions.length; i++) {
            var heading = document.createElement("h3")
            heading.innerHTML = i
            document.getElementById("container").appendChild(heading)
            var passage = document.createElement("p")
            passage.innerHTML = questions[i].Question.question.above
            document.getElementById("container").appendChild(passage)
            var pass1 = document.createElement("p")
            var pass2 = document.createElement("p")
            var pass3 = document.createElement("p")
            var pass4 = document.createElement("p")
            pass1.innerHTML = "1)" + questions[i].Question.option1
            pass2.innerHTML = "2)" + questions[i].Question.option2
            pass3.innerHTML = "3)" + questions[i].Question.option3
            pass4.innerHTML = "4)" + questions[i].Question.option4
            passage.appendChild(pass1)
            passage.appendChild(pass2)
            passage.appendChild(pass3)
            passage.appendChild(pass4)
        }
    }

    function handleEnd() {
        navigate("/end")
    }

    return (
        <div id="container">
            <h3>Click below button to get the exam questions !</h3>
            <button type="button" className='btn btn-primary' onClick={getQuestions}>GET questions</button>
            <button type="button" className="btn btn-danger" onClick={handleEnd} style={{ marginLeft: "20px" }}>End Exam</button>


        </div>
    )

}

