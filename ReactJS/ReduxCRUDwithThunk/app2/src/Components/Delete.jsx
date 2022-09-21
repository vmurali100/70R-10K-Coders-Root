import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { deleteComment } from '../CommentsSlice';

export const Delete = () => {
  const dispatch = useDispatch();
  const param =useParams()
  const navigate = useNavigate()


  const handleDelete=()=>{
    dispatch(deleteComment(param))
    navigate('/')
  }
  return (
    <div>
    <p> Are you sure u want to delete??</p>
      <button type="button" onClick={handleDelete} className='btn btn-danger'>Delete</button>
    </div>
  )
}
