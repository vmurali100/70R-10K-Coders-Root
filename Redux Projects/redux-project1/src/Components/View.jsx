import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Getnames } from '../store/userSlice';

export const View = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = useSelector((state)=>state.users)
    localStorage.setItem('user',JSON.stringify(user.users))
    console.log(user)
    const handleEnd = () => {
        navigate("/users")
    }

    return (
        <div className='container' id='container'>
            <div className='btn-group'>
            
            <button type="button"  style={{marginRight:"300px"}} className='btn btn-primary float' onClick={getQuestions}>Start Exam</button> <br/>
            
            
            <button type="button"  style={{marginLeft:"300px"}}  className='btn btn-danger' onClick={handleEnd}>End Exam</button>
            
            </div>
            <h3 style={{ color: "Green" }}>Exam Started For Selected Id </h3>
            {Details.length > 0 ? (
                <>
                    {Details.map((item, i) => {
                      console.log(Details)
                        return <div className='card' key={i}>
                            {Object.values(item).map((a, i) => {
                                return <div key={i} className="card">
                                    {Object.entries(a).map(([data, value], i) => {
                                        if (data === "id")
                                            return <div className='card-body' style={{ outline: "none", background: "skyblue" }}>
                                                <p className='card-title' style={{ color: "Red" }} key={i}>{data + ":" + value}</p>
                                            </div>
                                        else if (data === "name")
                                            return <h5 className='card-text' key={i}>{"name :" + "\u00a0\u00a0" + value.above}</h5>
                                        else if (data === "option1")
                                            return <div>
                                                <ul className="listed-option">

                                                    <li className="list-group-item" key={i}>{"1." + "\u00a0\u00a0" + value}</li>
                                                </ul>
                                               
                                            </div>
                                        
                                        else if (data === "usage")
                                            return <div className='card-body'>
                                                <p className='card-text' key={i}>{"usage" + ":" + "\u00a0\u00a0" + value}</p>
                                            </div>
                                        else if (data === "type" && value !== null)
                                            return <div className='card-body'>
                                              
                                                <p  className='card-title showp' style={{ color: "Green", fontWeight: "bolder"}} key={i}>{data + ":" + value}</p>
                                            </div>



                                    })}
                                </div>
                            })}
                        </div>
                    })}
                </>
            )
                : <p>{console.log("Details is empty")}</p>}
        </div>
    )
}          
