import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const DeleteTodo = () => {

    const objUrl = useParams()

    let url = "http://localhost:3201/todos/"

    const navigate = useNavigate();

    const deleteTodo=()=>{
        axios.delete(url+objUrl.id).then(()=>{
            navigate("/")
        })
    }

    useEffect(()=>{},[])
  return (
    <div>
        <p>Do you want to delete this todo ?</p>
        <button type="button" onClick={deleteTodo}>Delete Todo</button>
    </div>
  )
}
