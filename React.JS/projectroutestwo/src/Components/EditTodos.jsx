import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

export const EditTodo = () => {
    const objUrl = useParams()

    
    let url = "http://localhost:3201/todos/"

    const navigate = useNavigate()

    const info = JSON.parse(localStorage.getItem("todos"))

    const result = info.find((todo)=> todo.id == objUrl.id)

    console.log(result)

    const [todos, settodos] = useState(result)


    

    const handleChange=(e)=>{
        let newTodos = {...todos}
        newTodos[e.target.name] = e.target.value;
        settodos(newTodos)
    }

    const updateTodo=()=>{

        axios.put(url+objUrl.id,todos).then(()=>{
            navigate("/")
        })

    }
  return (
    <div>
        <form>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID :</label>
                    <input type="text" name='id' value={todos.id} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>
                
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title : :</label>
                    <input type="text" name='title' value={todos.title} onChange={(e)=>{handleChange(e)}}  className="form-control"  />
                
                </div>

                <div className="mb-3">
                    <label htmlFor="completed" className="form-label">Completed :</label>
                    <input type="text" name='completed' value={todos.completed} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>

                
                <button type="button" className='btn btn-primary' onClick={updateTodo}>Update Todo</button>

                
            </form>
    </div>
  )
}
