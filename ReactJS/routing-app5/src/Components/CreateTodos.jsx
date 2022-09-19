import React,{useState} from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export const CreateTodos = () => {
  let url="http://localhost:3207/Todos";
  let navigate = useNavigate();
  const [todo, settodo] = useState({
    userId:"",
    id:"",
    title:"",
    completed:"",
  })
  
  const handleChange=(e)=>{
    let todo1 ={...todo};
    todo1[e.target.name] = e.target.value;
    settodo(todo1);    
  }

  const adddata =()=>{
    axios.post(url,todo).then(()=>{
      navigate("/")
    })
  }
  return (
    <div className='container'>
    CreateNewTodo
  <form>
  <div className="mb-3 row">
<label  className="col-sm-2 col-form-label">UserId :</label>
<div className="col-sm-10">
  <input type="text"  className="form-control" name="userId"  value={todo.userId} onChange={(e)=>{handleChange(e)}} />
</div>
</div>
<div className="mb-3 row">
<label  className="col-sm-2 col-form-label">Id :</label>
<div className="col-sm-10">
  <input type="text" className="form-control" name="id"  value={todo.id} onChange={(e)=>{handleChange(e)}}/>
</div>
</div>
<div className="mb-3 row">
<label className="col-sm-2 col-form-label">Title :</label>
<div className="col-sm-10">
  <input type="text" className="form-control" name="title"  value={todo.title} onChange={(e)=>{handleChange(e)}}/>
</div>
</div>
<div className="mb-3 row">
<label  className="col-sm-2 col-form-label">Completed :</label>
<div className="col-sm-10">
<input type="text" className="form-control" name="completed"  value={todo.completed} onChange={(e)=>{handleChange(e)}}/>
</div>  
</div>

<button type="button" className='btn btn-primary' onClick={adddata}>Add</button>
</form>
</div>
  )
}
