import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deletePostAction } from '../Store/slice'

export const Delete = () => {

  const navigate = useNavigate()
  const objUrl = useParams()
  const dispatch = useDispatch()

  const handleDelete=()=>{
    dispatch(deletePostAction(objUrl))
    navigate("/")
  }
  return (
    <div>
      <p style={{color:"Red"}}>Are you sure to Delete?</p>
      <button type="button" className='btn btn-danger' onClick={handleDelete}>YES</button>
      <Link style={{marginLeft:"30px"}} to="/" className='btn btn-secondary'>NO</Link>
    </div>
  )
}
