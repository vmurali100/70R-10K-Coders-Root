import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../TodosSlice';
import { Link, useNavigate } from 'react-router-dom';

export const Todos = () => {
  const allTodosDetails = useSelector((state)=> state.todos);
  console.log(allTodosDetails.todos);
  localStorage.setItem("ReduxTodos",JSON.stringify(allTodosDetails.todos))
  const dispatch = useDispatch();

  useEffect(()=>{
 dispatch(getAllTodos())
  },[])
  return (
    <div className='container'>
      <Link to={'/create'} style={{position:'fixed', top:'5px' }} className="container"> <button type="button" className='btn btn-primary' style={{textAlign:'center'}}>Create New</button></Link>
      <table className='table table-striped' style={{ marginTop:'35px' }}>
        <thead>
          <tr>
            <th>UserID</th>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allTodosDetails.todos.map((todo,i)=> <tr key={i}>
            <td>{todo.userId}</td>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.completed}</td>
           <td><Link to={`/edit/${todo.id}`} className="btn btn-warning"> Edit </Link></td> 
            <td><Link to={`/delete/${todo.id}`} className="btn btn-danger"> Delete </Link></td>
          </tr>)}
        </tbody>
      </table>

    </div>
  )
}
