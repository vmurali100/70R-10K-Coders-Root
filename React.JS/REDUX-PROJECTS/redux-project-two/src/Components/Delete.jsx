import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import {deleteTodoAction} from '../Store/TodosSlice'

export const Delete = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const objUrl = useParams();
   
  const deleteTodo = () => {
    dispatch(deleteTodoAction(objUrl));
    navigate("/")
  }

  const handleCancel = () => {
    navigate("/");
  }


  return (
    <div>
      <p style={{color : "Red"}}>Are you sure to delete ?</p>
        <button className='btn btn-danger' onClick={deleteTodo} type="button">Delete Todo</button>
        <button style={{marginLeft:"20px"}} className='btn btn-primary' onClick={handleCancel} type="button">Cancel</button>
    </div>
  )
}
