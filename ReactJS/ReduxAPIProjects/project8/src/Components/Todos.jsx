import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllTodos } from '../store/todosSlice'
import { useNavigate } from "react-router-dom";



export const Todos = () => {
     const todosTodos=useSelector((state)=>state.todos);//for accessing state
     
   console.log(todosTodos.todos)
   localStorage.setItem('todos',JSON.stringify(todosTodos.todos))


   const dispatch = useDispatch();
   const navigate= useNavigate()


   const gettodos=()=>{
    dispatch(getAllTodos());
   }
   
   useEffect(()=>{
        gettodos()
   },[])
   const handleDelete=(todo)=>{
    navigate(`delete/${todo.id}`)
  }
  const handleEdit=(todo)=>{
    navigate(`edit/${todo.id}`)
  }
  return (
      <div className='container'>
          <table class="table table-dark table-striped">
            
            <thead>
              <tr>
                <th>ID</th>
                <th>UserId</th>
                <th>Title</th>
                <th>Completed</th>

                
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todosTodos.todos.map((todo,i)=>(
              <tr key={i}>
    
                <td>{todo.id}</td>
                <td>{todo.userId}</td>
                <td>{todo.title}</td>
                <td>{todo.completed}</td>



                
                <td><button className='btn btn-warning' onClick={()=>{handleEdit(todo)}}>Edit</button></td>
                <td><button className='btn btn-danger' onClick={()=>{handleDelete(todo)}}>Delete</button></td>
             </tr>))}
            </tbody>
            </table>
      
        </div>
      )
    
      
    }
    