import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { getallTodos } from '../Store/TodosSlice';

export const Todos = () => {
    const todosDetails = useSelector((state) => state.todos);
    console.log(todosDetails.todos);
    localStorage.setItem("todos",JSON.stringify(todosDetails.todos));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getTodos = () => {
        dispatch(getallTodos());
    }

    const handleDelete = (todo) => {
        navigate(`Delete/${todo.id}`)
      
    }

    const handleEdit = (todo) => {
        navigate(`Edit/${todo.id}`)
    }

    useEffect(()=>{
        getTodos();
    },[])


  return (
    <div className='container'>
        <table className="table table-bordered border-primary" style={{ marginTop: "20px" }}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {todosDetails.todos.map((todo,i)=> {
                    return <tr key={i}>
                         <td>{todo.id}</td>
                         <td>{todo.title}</td>
                         <td>{todo.completed}</td>
                         <td>
                            <button type="button" className="btn btn-warning" onClick={()=> {handleEdit(todo)}}>Edit</button>
                         </td>
                         <td>
                            <button type="button" className="btn btn-danger" onClick={()=> handleDelete(todo)}>Delete</button>
                         </td>
                    </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}
