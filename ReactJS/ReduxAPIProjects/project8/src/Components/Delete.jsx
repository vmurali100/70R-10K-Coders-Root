import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate,useParams } from "react-router-dom";
import { deleteTodoAction } from '../store/todosSlice';



export const Delete = () => {
    const dispatch=useDispatch()
    const navigate= useNavigate()
     const todo=useParams()//used to read data


    const deleteTodo=()=>{
            dispatch(deleteTodoAction(todo))
                    navigate("/")



    }
    const handleCancel=()=>{
        navigate("/")


    }
  return (
    <div className='container' style={{textAlign:"center",marginTop:'40px'}}>
        <p style={{color:"red"} }>Are you sure.... you want to Delete the Todo?</p>
        <button className='btn btn-danger'onClick={deleteTodo}>Delete Todo</button>
        <button className='btn btn-primary' style={{marginLeft:'30px'}} onClick={handleCancel}> Cancel</button>

    </div>
  )
}
