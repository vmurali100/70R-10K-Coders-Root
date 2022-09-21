import React,{useState,useEffect} from 'react'
import {TodoForm} from './TodoForm';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createTodo, updateTodo } from '../TodosSlice';

export const Edit = () => {
  
  const btntxt="Update";
  const dispatch = useDispatch();
  const info = useParams()
  const navigate = useNavigate()
  const [todo, settodo] = useState({
    userId:"",
    id:"",
    title:"",
    completed:""
  })

  const handleChange=(e)=>{
    let newtodo = {...todo}
    newtodo[e.target.name] = e.target.value;
    settodo(newtodo);
  }

  const handleUpdate=()=>{
    dispatch(updateTodo(todo))
    navigate('/')
  }  

  useEffect(()=>{
    const allTodos = JSON.parse(localStorage.getItem("ReduxTodos"));
    const newtodo = allTodos.find((myTodo)=> myTodo.id == info.id)
    settodo(newtodo)

  },[])

  return (
    <div>Create
      <TodoForm todo={todo} btntxt={btntxt} handleChange={handleChange} handleClick={handleUpdate}/>

    </div>
  )

   

}
