import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { deletewinAction } from '../store/winsSlice'

export const Delete = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const user = useParams()
    const handledelete = () => {
        dispatch(deletewinAction(user))
        navigate("/")
    }

    const handlecancel = () => {
        navigate("/")
    }
    return (
        <div>
            <p>Are you sure ..... want to delete WIN</p>
            <button type='button' className='btn btn-danger' onClick={handledelete}>DELETE</button>
            <button type='button' style={{ marginLeft: "20px" }} className='btn btn-primary' onClick={handlecancel}>CANCEL</button>
        </div>
    )
}
