import React from 'react'
import { useDispatch } from 'react-redux'
import { Form } from './Form'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updateTodoAction } from '../Store/TodosSlice'
import { useEffect } from 'react'

export const Edit = () => {

    const btnText = "Update"

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const objUrl = useParams()

    const [todo, settodo] = useState({
      id:"",
      title:"",
      completed:""

    });

    const handleUpdate=()=>{
      dispatch(updateTodoAction(todo));
      navigate("/")
      clearform();

    }

    const clearform=()=>{
      settodo({
        id:"",
        title:"",
        completed:""
      })
    }

    const handleChange=(e)=>{
      let newTodo = {...todo}
      newTodo[e.target.name] = e.target.value;
      settodo(newTodo)
      console.log(todo)

    }

    useEffect(()=>{
        const info = JSON.parse(localStorage.getItem("todos"));
        const result = info.find((a) => a.id == objUrl.id);
        settodo(result)
    },[])

    
  return (
    <div>
        <Form btnText={btnText} handleEvent={handleUpdate} handleChangeEvent={handleChange} todo={todo} />
    </div>
  )
}
