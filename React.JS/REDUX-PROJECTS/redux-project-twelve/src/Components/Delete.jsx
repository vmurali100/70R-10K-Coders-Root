import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteUserAction } from '../Store/slice'

export const Delete = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const objUrl = useParams()

    const handleDelete=()=>{
        dispatch(deleteUserAction(objUrl))
        navigate("/")
    }
  return (
    <div>
        <p>Please confirm if you wish to delete the selected User</p>
        <button style={{marginRight:"25px"}} type="button" className='btn btn-danger' onClick={handleDelete}>Yes</button>
        <Link to="/" className='btn btn-primary'>Cancel</Link>
    </div>
  )
}
