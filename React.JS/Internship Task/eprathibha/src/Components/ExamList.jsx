import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { getexamList } from '../Store/Slice'




export const ExamList = () => {



  const navigate = useNavigate()
  const dispatch = useDispatch()

  const examlistData = useSelector(state => state.exams)
  console.log(examlistData) //Consoles the data saved in the state.exams using the dispatch function and reducers

  const details = JSON.parse(localStorage.getItem("userData"))

  const server_Key = "3w99V63pW7tJ7vavGXtCKo8cp"

  const id_key = details.Id

  const token_key = details.Token

  const [examData, setexamData] = useState({
    id: id_key,
    tokenu: token_key,
    server_key: server_Key
  })

  const getExam = () => {
    dispatch(getexamList(examData)) //triggers the getexamList function created in Slice using create async thunk
  }

  const getQuestions = () => {
    navigate("/questionslist")
  }

  const getQuestionsTwo = (y) => {
    navigate(`/questionslisttwo/${y}`)
  }


  const examsList = JSON.parse(localStorage.getItem("exams")) //gets the data from the local storage and saves it in the examsList varialble

  console.log("ExamsList : ", examsList) //logs the data stored in the examsList varialble

  console.log(typeof (examsList))  //logs the data type of the variable

  return (
    <div className='container' style={{ background: "lightBlue" }}>

      <h2>Welcome Student</h2>
      <hr />
      <div>
        <button onClick={getExam} type="button" className='btn btn-primary' style={{ marginBottom: "25px" }}>Go To Exam</button> <br />
        <button onClick={getQuestions} type="button" className='btn btn-primary' style={{ marginBottom: "25px" }}>Click to get Questions</button>
      </div>
      {console.log(examsList)}

      {examsList.length > 0 ? ( //checks if the examsList is empty or not
        <>
          {examsList.map((exam) => {
            console.log(exam)
            return <div>
              {Object.entries(exam).map(([item, item1]) => {
                console.log(item + ":" + item1)

                if (item === "Old question papers UPSC Civils (Pre)") {
                  console.log(item1)
                  return <div>
                    {item1.map((obj) => {
                      console.log(obj)
                      // return <h1 key={i}>{console.log(val)}</h1>
                      return <div>
                        {Object.entries(obj).map(([a, b], i) => {
                          console.log(a, b)

                          if (a === "Exam") {
                            return <div>
                              {Object.entries(b).map(([x, y], i) => {
                                console.log(x, y)
                                if (x === "id") {
                                  return <div>
                                    <p key={i}>{x + ":" + y}</p>
                                    <button type="button" className='btn btn-secondary' onClick={()=>getQuestionsTwo(y)}>click to get questions for this exam ID</button>
                                  </div>
                                }
                                else if (x === "type") {
                                  return <p key={i}>{x + ":" + y}</p>
                                }
                                else if (x === "name") {
                                  return <p key={i}>{x + ":" + y}</p>
                                }
                                else if (x === "duration") {
                                  return <p key={i}>{x + ":" + y + "minutes"}</p>
                                }
                                else if (x === "start_date") {
                                  return <p key={i}>{x + ":" + y}</p>
                                }
                                else if (x === "end_date") {

                                  return <div>
                                    <p key={i}>{x + ":" + y}</p>
                                    
                                    <hr style={{ border: "2px solid black" }} />
                                  </div>
                                }
                              })}
                            </div>
                          }



                        })}
                      </div>
                    })}
                  </div>
                }
                else if (item === "Limited UPSC other than Civils") {
                  console.log(item1)
                  return <div>
                    {item1.map((obj) => {
                      console.log(obj)
                      // return <h1 key={i}>{console.log(val)}</h1>
                      return <div>
                        {Object.entries(obj).map(([a, b], i) => {
                          console.log(a, b)

                          if (a === "Exam") {
                            return <div>
                              {Object.entries(b).map(([x, y], i) => {
                                console.log(x, y)
                                if (x === "id") {
                                  return<div>
                                    <p key={i}>{x + ":" + y}</p>
                                    <button type="button" className='btn btn-secondary' onClick={()=>getQuestionsTwo(y)}>click to get questions for this exam ID</button>
                                    </div>
                                }
                                else if (x === "type") {
                                  return <p key={i}>{x + ":" + y}</p>
                                }
                                else if (x === "name") {
                                  return <p key={i}>{x + ":" + y}</p>
                                }
                                else if (x === "duration") {
                                  return <p key={i}>{x + ":" + y + "minutes"}</p>
                                }
                                else if (x === "start_date") {
                                  return <p key={i}>{x + ":" + y}</p>
                                }
                                else if (x === "end_date") {

                                  return <div>
                                    <p key={i}>{x + ":" + y}</p>
                                    <hr style={{ border: "2px solid black" }} />
                                  </div>
                                }
                              })}
                            </div>
                          }



                        })}
                      </div>
                    })}
                  </div>
                }
                else if (item === "Limited NCERT") {
                  console.log(item1)
                  return <div>
                    {item1.map((obj) => {
                      console.log(obj)
                      // return <h1 key={i}>{console.log(val)}</h1>
                      return <div>
                        {Object.entries(obj).map(([a, b], i) => {
                          console.log(a, b)

                          if (a === "Exam") {
                            return <div>
                              {Object.entries(b).map(([x, y], i) => {
                                console.log(x, y)
                                if (x === "id") {
                                  return <div>
                                    <p key={i}>{x + ":" + y}</p>
                                    <button type="button" className='btn btn-secondary' onClick={()=>getQuestionsTwo(y)}>click to get questions for this exam ID</button>
                                    </div>
                                }
                                else if (x === "type") {
                                  return <p key={i}>{x + ":" + y}</p>
                                }
                                else if (x === "name") {
                                  return <p key={i}>{x + ":" + y}</p>
                                }
                                else if (x === "duration") {
                                  return <p key={i}>{x + ":" + y + "minutes"}</p>
                                }
                                else if (x === "start_date") {
                                  return <p key={i}>{x + ":" + y}</p>
                                }
                                else if (x === "end_date") {

                                  return <div>
                                    <p key={i}>{x + ":" + y}</p>
                                    <hr style={{ border: "2px solid black" }} />
                                  </div>
                                }
                              })}
                            </div>
                          }



                        })}
                      </div>
                    })}
                  </div>
                }
              })}
            </div>
          })}
        </>
      )


        : <p>{"No Data"}</p>
      }
    </div>
  )
}