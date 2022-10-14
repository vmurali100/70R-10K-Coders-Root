import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { endExam, getQuestionsList } from '../Store/Slice'

export const QuestionsList = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const details = JSON.parse(localStorage.getItem("userData"))

    const server_Key = "3w99V63pW7tJ7vavGXtCKo8cp"

    const id_key = details.Id

    const token_key = details.Token

    

    const [questionsData, setQuesionsData] = useState({
        id : id_key,
        tokenu : token_key,
        server_key : server_Key
    })

    const getQuestions = () => {
        dispatch(getQuestionsList(questionsData))
    }

    const questions = JSON.parse(localStorage.getItem("questions"))

    const [end, setend] = useState({
        examId : "24",
        qno:"5"
    })


    const handleEnd = () => {
         navigate("/EndExam")
        
        
    }

    


  return (
    <div className='container' id='contain'>
        <button type="button" className='btn btn-primary' onClick={getQuestions}>Get Questions</button>
        <button type="button" className='btn btn-danger' onClick={handleEnd}>End Exam</button>
        <hr/>
        <h3 style={{color:"Green"}}>Below is the questions list for the selected exam</h3>
        {questions.length > 0 ? (
            <>
                {questions.map((item)=>{
                  return  <div>
                        {Object.values(item).map((a)=>{
                           return <div>
                                {Object.entries(a).map(([data,value],i)=>{
                                    // return <p key={i}>{console.log(data + ":" + value)}</p>
                                    
                                    if(data === "ques_no")
                                    return <p style={{color:"Red"}} key={i}>{data + ":" + value}</p>
                                    else if(data==="question")
                                    return <h5 key={i}>{data + ":" + value.above}</h5>
                                    else if(data === "option1")
                                    return <p key={i}>{data + ":" + value}</p>
                                    else if(data === "option2")
                                    return <p key={i}>{data + ":" + value}</p>
                                    else if(data === "option3")
                                    return <p key={i}>{data + ":" + value}</p>
                                    else if(data === "option4")
                                    return <div>
                                    <p key={i}>{data + ":" + value}</p>
                                    
                                    <hr style={{border:"2px solid black"}}/>
                                    </div>
                                    
                                    
                                   
                                    
                                })}
                            </div>
                        })}
                    </div>
                })}
            </>
        ) 
        : <p>{console.log("questions is empty")}</p>}
    </div>
  )
}
