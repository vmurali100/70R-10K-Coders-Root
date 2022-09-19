import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Todos = () => {
  const [todos, settodos] = useState([])
  let url = " http://localhost:3201/todos "

   useEffect(()=>{
    axios.get(url).then((response)=>{
      localStorage.setItem("todos",JSON.stringify(response.data))
      console.log(response.data)
      settodos(response.data)
    })
   },[])

  return (
    <div className='container'>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo,i)=>{
            return <tr key={i}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed}</td>
              <td>
                <Link to={`/EditTodo/${todo.id}`} className="btn btn-warning" >Edit</Link>
              </td>
              <td>
                <Link to={`/DeleteTodo/${todo.id}`} className="btn btn-danger" >Delete</Link>
              </td>
              <td>
                <Link to={`/TodoDetails/${todo.id}`} className="btn btn-primary" >Details</Link>
              </td>
            </tr>
          })}
        </tbody>
      </table>

    </div>
  )
}
