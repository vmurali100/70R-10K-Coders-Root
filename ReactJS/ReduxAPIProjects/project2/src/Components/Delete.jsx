import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate,useParams } from "react-router-dom";
import { deleteUserAction } from '../store/usersSlice';



export const Delete = () => {
    const dispatch=useDispatch()
    const navigate= useNavigate()
     const user=useParams()//used to read data


    const deleteUser=()=>{
            dispatch(deleteUserAction(user))
                    navigate("/")



    }
    const handleCancel=()=>{
        navigate("/")


    }
  return (
    <div className='container' style={{textAlign:"center",marginTop:'40px'}}>
        <p style={{color:"red"} }>Are you sure.... you want to Delete the User?</p>
        <button className='btn btn-danger'onClick={deleteUser}>Delete User</button>
        <button className='btn btn-primary' style={{marginLeft:'30px'}} onClick={handleCancel}> Cancel</button>

    </div>
  )
}
