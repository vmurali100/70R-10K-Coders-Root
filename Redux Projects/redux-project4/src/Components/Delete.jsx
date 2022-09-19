import React from 'react'
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteUserAction } from '../store/usersSlice';
export const Delete = () => {
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const user = useParams()
    const deleteUser=()=>{
        dispatch(deleteUserAction(user))
        alert("Deleted Successfully")
        navigate("/")
    }
    const handleCancel=()=>{
        navigate("/")
    }
  return (
    <div className='container' style={{textalign:"center",marginTop:"40px"}}><p>Are You Sure You Want to Delete?</p>
    <button className='btn btn-danger' onClick={deleteUser}> Delete</button>
    <button className='btn btn-primary' style={{marginLeft:"20px"}} onClick={handleCancel}> Cancel</button></div>
  )
}
