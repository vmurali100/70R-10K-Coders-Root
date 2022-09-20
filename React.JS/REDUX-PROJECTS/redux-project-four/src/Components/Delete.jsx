import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { deleteCommentAction } from '../Store/slice';

export const Delete = () => {
  const navigate = useNavigate();
  const objUrl = useParams()
  const dispatch = useDispatch()

  const handleDelete=()=>{
    dispatch(deleteCommentAction(objUrl))
    navigate("/")
  }

  const handleCancel=()=>{
    navigate("/")
  }
  return (
    <div>
      <p style={{color:"Red"}}>Are you sure ?</p>
      <button type="button" className='btn btn-danger' onClick={handleDelete}>DELETE</button>
      <button style={{marginLeft:"30px"}} type="button" className='btn btn-primary' onClick={handleCancel}>CANCEL</button>
    </div>
  )
}
