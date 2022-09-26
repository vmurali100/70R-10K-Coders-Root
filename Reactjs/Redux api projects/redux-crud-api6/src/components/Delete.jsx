import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteUserAction } from '../Store/usersSlice'
export const Delete = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const user=useParams();
    const deleteUser=()=>{
        dispatch(deleteUserAction(user))
        navigate("/")
    }
    const handleCancel=()=>{
        navigate("/")
    }
  return (
    <div className='container' style={{textAlign:"center", marginTop:"40px"}}>
        <p style={{color:"red"}}>Are U Sure...You want to delete the user?</p>
        <button className='btn btn-danger' onClick={deleteUser}>Delete User</button>
        <button className='btn btn-primary' style={{marginLeft:"20px"}} onClick={handleCancel}>Cancel</button>
    </div>
  )
}
