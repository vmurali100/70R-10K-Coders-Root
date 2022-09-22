import React,{useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {  updateTodoAction } from '../store/todosSlice';
import { useEffect } from 'react';
import { UserForm } from './UserForm'



export const Edit = () => {
    const btnText ="Update Todo"
    const [todo, settodo] = useState({id:"",userId:"",title:"",completed:""})
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const todoInfo=useParams()
    const handleUpdate=()=>{
        dispatch(updateTodoAction(todo))
        navigate("/")

        
    }
    const handleChange=(e)=>{//for giving inputs
        let newTodos={...todo}
        newTodos[e.target.name]=e.target.value
        settodo(newTodos)

    }
    useEffect(()=>{
        const allTodos = JSON.parse(localStorage.getItem("todos"))
        const newTodo=allTodos.find((myTodo)=>myTodo.id==todoInfo.id);
        settodo(newTodo)

    },[])//[] it executes one time
  return (
    <div className='container'>
        <UserForm  btnText={btnText} todo={todo} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}

