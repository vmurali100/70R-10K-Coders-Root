
import React,{useState} from 'react'

export const QuestionsList = () => {
  
    const [questions, setquestions] = useState([])


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

        const result = await response.json()
        console.log(result)
        setquestions(result.data.exam)
        console.log(questions)


        // let i;

        // for(i=0;i<questions.length;i++){
        //     console.log(questions[i].Question)
        // }
        



    }

        return (
            <div>
                <h3>Click below button to get the exam questions !</h3>
                <button type="button" className='btn btn-primary' onClick={getQuestions}>GET questions</button>
                
            </div>
        )
    }