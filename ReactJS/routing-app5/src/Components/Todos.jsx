import React,{useState} from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export const Todos = () => {
  const [todos, settodos] = useState([]);
  let url="http://localhost:3207/Todos";

  useEffect(()=>{
    axios.get(url).then((res)=>{
     const todosData =  JSON.parse(JSON.stringify(res.data))
     localStorage.setItem("Todos",JSON.stringify(res.data));
     settodos(res.data);
     console.log(todosData);
    })
  },[])
  return (
    <div className='container'>
<><Link to={"/createtodo"}><button type="button">Create New</button></Link>
<h2>Todos List</h2></>
<table className="table table-danger table-striped-columns">
<thead>
    <tr>
      <th >UserId</th>
      <th >Id</th>
      <th >Title</th>
      <th >Completed</th>
      <th>Details</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {todos.map((todo,i)=>{
      return <tr key={i}>
        <td>{todo.userId}</td>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td>{todo.completed}</td>
        <td><Link to={`/tododetails/${todo.id}`} className="btn btn-info">Details</Link></td>
        <td><Link to={`/edittodo/${todo.id}`} className="btn btn-warning">Edit</Link></td>
        <td><Link to={`/deletetodo/${todo.id}`} className="btn btn-danger">Delete</Link></td>
      </tr>
    })}
    </tbody>
</table>
    </div>
  )
}
