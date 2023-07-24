 import React from 'react'
 import { useDispatch, useSelector } from "react-redux";
 import { useNavigate } from "react-router-dom";
 import { Freeexam } from '../store/userSlice';
 import { Link } from 'react-router-dom'
export const GetFreeexamlist = () => {
  const user = useSelector((state) => state.users);
  localStorage.setItem('user',JSON.stringify(user.users))
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const handleexam=()=>{
dispatch(Freeexam())
  }
  const examsList = user.users
return (
  <div>
<center>
<button type='button' onClick={handleexam} className="btn btn-info" style={{marginRight:"300px",marginTop:'10px'}}>Get Free Exams</button>
<Link to="/main" className="btn btn-warning" style={{marginLeft:"300px",marginTop:'10px'}}> Back</Link>
<hr />
{examsList.length > 0 ? ( 
        <>
        <center>
          {examsList.map((exam) => {
            console.log(exam)
            return <div>
              {Object.entries(exam).map(([list, list1]) => {
                console.log(list + ":" + list1)

                if (list === "Old question papers UPSC Civils (Pre)") {
                  console.log(list1)
                  return <div>
                    {list1.map((data) => {
                      console.log(data)
                      return <div>
                        {Object.entries(data).map(([a, b], i) => {
                          console.log(a, b)

                          if (a === "Exam") {
                            return <div>
                              {Object.entries(b).map(([x, y], i) => {
                                console.log(x, y)
                                if (x === "id") {
                                  return <div>
                                    <p><h3>Exam Category:Old question papers UPSC Civils (Pre)</h3></p>
                                    <p key={i}>{x + ":" + y}</p>                                   
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
                                                      
                                  </div>
                                }
                              })}
                                  <hr/>

                            </div>
                          }
                        })}
                      </div>
                    })}
                  </div>
                }
                else if (list === "Limited UPSC other than Civils") {
                  console.log(list1)
                  return <div>
                    {list1.map((data) => {
                      console.log(data)
                  
                      return <div>
                        {Object.entries(data).map(([a, b], i) => {
                          console.log(a, b)

                          if (a === "Exam") {
                            return <div>
                              {Object.entries(b).map(([x, y], i) => {
                                console.log(x, y)
                                if (x === "id") {
                                  return<div>
                                    <p><h3>Exam Category:Limited UPSC other than Civils</h3></p>
                                    <p key={i}>{x + ":" + y}</p>
                                   
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
                                  </div>
                                }
                              })}
                               <hr/>
                            </div>
                          }
                        })}
                      </div>
                    })}
                  </div>
                }
                else if (list === "Limited NCERT") {
                  console.log(list1)
                  return <div>
                    {list1.map((data) => {
                      console.log(data)
                      return <div>
                        {Object.entries(data).map(([a, b], i) => {
                          console.log(a, b)
                          if (a === "Exam") {
                            return <div>
                              {Object.entries(b).map(([x, y], i) => {
                                console.log(x, y)
                                if (x === "id") {
                                  return <div>
                                    <p><h3>Exam Category:Limited NCERT</h3></p>
                                    <p key={i}>{x + ":" + y}</p>                                 
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
                                  </div>
                                }
                              })}
                               <hr/>
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
          </center>
        </>
      )
        : <p>{"No Data"}</p>
      }
      </center>
</div>
)
}