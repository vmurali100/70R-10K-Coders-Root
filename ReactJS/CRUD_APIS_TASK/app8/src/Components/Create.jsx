import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios"
export const Create = () => {

    const [todo, settodo] = useState({id:"",userId:"",title:"",completed:""})
    const navigate= useNavigate()
    let url="http://localhost:4009/todo/"



    const handleChange=(e)=>{
        let newTodos={...todo}
        newTodos[e.target.name]=e.target.value
        settodo(newTodos)
    }
    const AddTodo=()=>{
        axios.post(url,todo).then(()=>{
            navigate('/')
        })

    }
    return (
        <div className='container'>
        <form>
        <label htmlFor=''>ID :</label>
           <input type="text" name="id" value={todo.id} onChange={(e)=>{handleChange(e)}} /> <br/>
           <label htmlFor=''>UserId :</label>
           <input type="text" name="userId" value={todo.userId} onChange={(e)=>{handleChange(e)}} /> <br/>
           <label htmlFor="">Title :</label>
           <input type="text" name="title"value={todo.title} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="">Completed :</label>
           <input type="text" name="completed"value={todo.completed} onChange={(e)=>{handleChange(e)}}/> <br/>
           
           
    
           <button type="button" className='btn btn-primary' onClick={AddTodo}>Add</button>
    
    
    </form>
    </div>
      )}
    