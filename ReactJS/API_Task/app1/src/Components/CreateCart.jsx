import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateCart = () => {

    let url = ""

    const navigate = useNavigate()

    const [studentDetails, setstudentDetails] = useState({
        id : "",
        userId : "",
        date : ""
    });



    const handleChange=(e)=>{
           let newTodoDetails = {...studentDetails}
           newTodoDetails[e.target.name] = e.target.value
           setstudentDetails(newTodoDetails)

    }

    const addTodo=()=>{
        axios.post(url,studentDetails).then(()=>{
            navigate("/")
        })
    }



  return (
    <div>
        <form>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID :</label>
                    <input type="text" name='id' value={studentDetails.id} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>
                
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title : :</label>
                    <input type="text" name='title' value={studentDetails.title} onChange={(e)=>{handleChange(e)}}  className="form-control"  />
                
                </div>

                <div className="mb-3">
                    <label htmlFor="completed" className="form-label">Completed :</label>
                    <input type="text" name='completed' value={studentDetails.completed} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>

                
                <button type="button" className='btn btn-primary' onClick={addTodo}>Add Todo</button>

                
            </form>
    </div>
  )
}
Footer