import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createTodo } from '../TodosSlice';
import {TodoForm} from './TodoForm';

export const Create = () => {
  const btntxt="Add";
  const dispatch = useDispatch();
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

  const handleClick=()=>{
    dispatch(createTodo(todo))
    navigate('/')
  }  

  return (
    <div>Create
      <TodoForm todo={todo} btntxt={btntxt} handleChange={handleChange} handleClick={handleClick}/>

    </div>
  )
}
