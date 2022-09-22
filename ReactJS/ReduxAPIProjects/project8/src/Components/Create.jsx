
  import React,{useState} from 'react'
  import { useDispatch } from 'react-redux';
  import { createTodoAction } from '../store/todosSlice';
  import { useNavigate } from "react-router-dom";
  import { UserForm } from './UserForm'

  
  
  export const Create = () => {
      const btnText ="Add Todo";
      const [todo, settodo] = useState({id:"",userId:"",title:"",completed:""})
      const dispatch=useDispatch();
      const navigate=useNavigate()
      const handleCreate=()=>{
          dispatch(createTodoAction(todo))
          navigate("/")
  
          
      }
      const handleChange=(e)=>{//for giving inputs
          let newTodos={...todo}
          newTodos[e.target.name]=e.target.value
          settodo(newTodos)
  
      }
  
    return (    
      <div className="container">
          <UserForm btnText={btnText} todo={todo} handleEvent={handleCreate} handleChangeEvent={handleChange}/>
          
  </div>
  
    )}
  
  
    