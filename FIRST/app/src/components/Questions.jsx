import React from 'react'

const Questions = () => {
    const questions= JSON.parse(localStorage.getItem("freeexamquestions"))
    
    console.log(questions)
  return (
    <div className='container'>
                {questions.exam.length > 0? (
                <>
                    {questions.exam.map((item, i) => {
                        return <div className='card' key={i}>
                            
                            {Object.values(item).map((a, i) => {
                                return <div key={i} className="card">
                                    {Object.entries(a).map(([data, value], i) => {
                                        if (data === "ques_no")

                                            return <div className='card-body' style={{ outline: "none", background: "Yellow" }}>
                                                 <p className='card-title' style={{ color: "Red" }} key={i}>{data + ":" + value}</p>
                                                 {/* <button type="button" className='btn btn-danger' onClick={()=>handleEnd(value)}>End Exam</button> */}
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

export default Questions