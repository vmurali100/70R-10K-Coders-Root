import React,{useState} from 'react'
import { createTodoAction } from '../Store/TodosSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Form } from './Form';


export const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [todo, settodo] = useState({
    id: "",
    title : "",
    completed : ""
  });

  const btnText = "ADD TODO"

  const handleCreate=()=>{
    dispatch(createTodoAction(todo));
    navigate("/");
  }

  const handleChange = (e) => {
    let newTodo = {...todo};
    newTodo[e.target.name] = e.target.value;
    settodo(newTodo)
  }


  return (
    <Form todo={todo} btnText={btnText} handleChangeEvent={handleChange} handleEvent={handleCreate} />
  )
}
