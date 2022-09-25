import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate,useParams } from 'react-router-dom'
import { deleteuserAction } from '../store/usersSlice'

export const Delete = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

const user=useParams()

    const handledelete = () => {
        dispatch(deleteuserAction(user))
        navigate("/")
    }

    const handlecancel = () => {
        navigate("/")
    }
    return (
        <div className='container' style={{ textAlign: "center", marginTop: "30px" }} >
            <p style={{ color: "red" }}>Are you sure ... want to delete user ?</p>
            <button className='btn btn-danger' onClick={handledelete}>DELETE</button >
            <button className='btn btn-primary' style={{ marginLeft: "40px" }} onClick={handlecancel}>CANCEL</button>
        </div>
    )
}
