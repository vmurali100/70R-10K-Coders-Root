import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateTodo = () => {

    let url = "  http://localhost:3201/todos "

    const navigate = useNavigate()

    const [todoDetails, settodoDetails] = useState({
        id : "",
        title : "",
        completed : ""
    });



    const handleChange=(e)=>{
           let newTodoDetails = {...todoDetails}
           newTodoDetails[e.target.name] = e.target.value
           settodoDetails(newTodoDetails)

    }

    const addTodo=()=>{
        axios.post(url,todoDetails).then(()=>{
            navigate("/")
        })
    }



  return (
    <div>
        <form>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID :</label>
                    <input type="text" name='id' value={todoDetails.id} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>
                
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title : :</label>
                    <input type="text" name='title' value={todoDetails.title} onChange={(e)=>{handleChange(e)}}  className="form-control"  />
                
                </div>

                <div className="mb-3">
                    <label htmlFor="completed" className="form-label">Completed :</label>
                    <input type="text" name='completed' value={todoDetails.completed} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>

                
                <button type="button" className='btn btn-primary' onClick={addTodo}>Add Todo</button>

                
            </form>
    </div>
  )
}
