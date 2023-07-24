import React from "react";
import {createAsyncThunk } from '@reduxjs/toolkit';
import { useState } from "react";
import { useSelector } from 'react-redux'
export function Search() {
  const [search, setsearch] = useState();
  const [data, setdata] = useState([]);
  const user = useSelector((state) => state.users);
  localStorage.setItem('user',JSON.stringify(user.users))
  console.log(user);

  const examsList = user.users
  const searchHandle = async (event) => {
    let search = event.target.value;
    let result = await fetch(`https://e-prathibha.com/apis/test_free_exam?q=${search}`);
    result = await result.json();
    if (result) {
      setdata(result);
    }
  };

//   const searchHandle = createAsyncThunk("searchHandle", async () => {
//     const id = localStorage.getItem('id')
//     const tokenu = localStorage.getItem('tokenu')
//     const server_key = '3w99V63pW7tJ7vavGXtCKo8cp'
//     console.log(id, tokenu, server_key)
//     const headers = {
//       'id': id,
//       'tokenu': tokenu,
//       server_key: server_key,
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     }
//     console.log(headers)
//     const res = await fetch(`https://e-prathibha.com/apis/test_free_exam?q=${search}`, { method: "POST", headers }
//     )
  
  
//     return await res.json()
//         if (res) {
//           setdata(res);
//         }
    // .then(res => res.json()).then(data => {
    //   console.log(data)
    // }
    // )
  
  
  
  
//   })
  
  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="enter search"
        onChange={searchHandle}
      />
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
                                    <button type="button" className='btn btn-secondary' >Start Exam</button>
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
                                    <button type="button" className='btn btn-secondary' >Start Exam</button>
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
                                    <button type="button" className='btn btn-info'>Start Exam</button>
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
  );
}

export default Search;
