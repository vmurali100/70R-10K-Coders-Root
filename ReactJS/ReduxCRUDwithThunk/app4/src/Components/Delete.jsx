import React from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { deleteTodo } from '../TodosSlice';

export const Delete = () => {
  const dispatch = useDispatch();
  const info = useParams()
  // const navigate = useNavigate()

  const handleDelete=()=>{
    dispatch(deleteTodo(info))
  }
  return (
    <div className='container' style={{color:"Red"}}>Delete
    <p>Are you sure...., you want to delete?????</p>
    <Link to={'/'}> <button type="button" onClick={handleDelete} className="btn btn-danger">DELETE</button> </Link>
    <Link to={'/'}> <button type="button" className='btn btn-primary'>Cancel</button> </Link>
    </div>
  )
}
