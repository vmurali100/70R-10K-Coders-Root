import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { deleteUserAction } from '../store/usersSlice';


export const Delete = () => {

    const dispatch = useDispatch();
    const item = useParams();
    const navigate = useNavigate();

    const deleteUser=()=>{
          dispatch(deleteUserAction(item))
          navigate("/")
    }

    const handleCancel=()=>{
            navigate("/");
    }
  return (
    <div>
        <p style={{color : "Red"}}>Are you sure to delete ?</p>
        <button className='btn btn-danger' onClick={deleteUser} type="button">Delete User</button>
        <button style={{marginLeft:"20px"}} className='btn btn-primary' onClick={handleCancel} type="button">Cancel</button>
    </div>
  )
}
