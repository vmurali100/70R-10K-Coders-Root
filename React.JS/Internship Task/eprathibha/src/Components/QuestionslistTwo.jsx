import React,{useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { getQuestionsListForID } from '../Store/Slice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import QuestionsReducer from '../Redux/QuestionsReducer'

export const Questionslisttwo = () => {
    const objUrl = useParams()
    console.log(objUrl.y)
    const ID = objUrl.y
    sessionStorage.setItem("urlID",JSON.stringify(ID))
    const questionslistDataTwo = useSelector((state) => state.QuestionsReducer.questions)
    console.log("Questions for the selected exam is :",questionslistDataTwo)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const details = JSON.parse(localStorage.getItem("userData"))
    const server_Key = "3w99V63pW7tJ7vavGXtCKo8cp"
    const id_key = details.Id
    const token_key = details.Token
    const [questionsData, setQuesionsData] = useState({
        id: id_key,
        tokenu: token_key,
        server_key: server_Key
    })
    const getQuestionsforID = () => {
        console.log(ID)
        dispatch(getQuestionsListForID({questionsData,ID}))
    }
   const questions = questionslistDataTwo
   const handleEnd = () => {
        navigate("/EndExam")
    }

   return (
    <div className='container' id='contain'>
            <button type="button" style={{marginBottom:"20px"}} className='btn btn-primary' onClick={getQuestionsforID}>Get Questions</button> <br/>
            <button type="button" className='btn btn-danger' onClick={handleEnd}>End Exam</button>
            <hr />
            <h3 style={{ color: "Green" }}>Below is the questions list for the selected exam ID</h3>
            {questions.length > 0 ? (
                <>
                    {questions.map((item, i) => {
                        return <div className='card' key={i}>
                            {Object.values(item).map((a, i) => {
                                return <div key={i} className="card">
                                    {Object.entries(a).map(([data, value], i) => {
                                        if (data === "ques_no")
                                            return <div className='card-body' style={{ outline: "none", background: "Yellow" }}>
                                                <p className='card-title' style={{ color: "Red" }} key={i}>{data + ":" + value}</p>
                                            </div>
                                        else if (data === "question")
                                            return <h5 className='card-text' key={i}>{"Question :" + "\u00a0\u00a0" + value.above}</h5>
                                        else if (data === "option1")
                                            return <div>
                                                <ul className="list-group list-group-flush">

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
            ) : <p>{"questions is empty"}</p>}
        </div>
      )
}
