import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Getquestions } from '../store/userSlice';
export const GetExam = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state)=>state.users)
    localStorage.setItem('user',JSON.stringify(user.users))
    console.log(user)
 const getQuestions = () => {
dispatch(Getquestions())      
     }
    const questions = user.users
    const handleEnd = () => {
        navigate("/Finishexam")
    }
    return (
        <div className='container' id='container'>
          <center>
            <div className='btn-group'>
            
            <button type="button"  style={{marginRight:"300px"}} className='btn btn-primary float' onClick={getQuestions}>Start Exam</button> <br/>
            
            
            <button type="button"  style={{marginLeft:"300px"}}  className='btn btn-danger' onClick={handleEnd}>End Exam</button>
            
            </div>
            <h3 style={{ color: "Green" }}>Exam Started For Selected Id </h3>
            {questions.length > 0 ? (
                <>
                    {questions.map((item, i) => {
                      console.log(questions)
                        return <div className='card' key={i}>
                            {Object.values(item).map((a, i) => {
                                return <div key={i} className="card">
                                    {Object.entries(a).map(([data, value], i) => {
                                        if (data === "ques_no")
                                            return <div className='card-body' style={{ outline: "none", background: "skyblue" }}>
                                                <p className='card-title' style={{ color: "Red" }} key={i}>{data + ":" + value}</p>
                                            </div>
                                        else if (data === "question")
                                            return <h5 className='card-text' key={i}>{"Question :" + "\u00a0\u00a0" + value.above}</h5>
                                        else if (data === "option1")
                                            return <div>
                                                <ul className="listed-option">

                                                    <li className="list-group-item" key={i}>{"1." + "\u00a0\u00a0" + value}</li>
                                                </ul>
                                               
                                            </div>
                                        else if (data === "option2")
                                            return <div>
                                                <ul className="list-group list-group-flush">

                                                    <li className="list-group-item" key={i}>{"2." + "\u00a0\u00a0" + value}</li>
                                                </ul>
                                            </div>
                                        else if (data === "option3")
                                            return <div>
                                                <ul className="list-group list-group-flush">

                                                    <li className="list-group-item" key={i}>{"3." + "\u00a0\u00a0" + value}</li>
                                                </ul>
                                            </div>
                                        else if (data === "option4")
                                            return <div>
                                                <ul className="list-group list-group-flush">

                                                    <li className="list-group-item" key={i}>{"4." + "\u00a0\u00a0" + value}</li>
                                                </ul>
                                            </div>
                                        else if (data === "explanation")
                                            return <div className='card-body'>
                                                <p className='card-text' key={i}>{"EXPLANATION" + ":" + "\u00a0\u00a0" + value}</p>
                                            </div>
                                        else if (data === "answer" && value !== null)
                                            return <div className='card-body'>
                                                <p  className="showanswer">Show Answer</p>
                                                <p  className='card-title showp' style={{ color: "Green", fontWeight: "bolder"}} key={i}>{data + ":" + value}</p>
                                            </div>
                                    })}
                                </div>
                            })}
                        </div>
                    })}
                </>
            )
                : <p>{console.log("questions is empty")}</p>}
        </center>
        </div>
    )
}          
