import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteItemAction } from '../store/itemsSlice';

export const Delete = () => {
    const dispatch = useDispatch();
    const navigate =useNavigate();
        const item = useParams();

    const deleteUser=()=>{
        dispatch(deleteItemAction(item));
        navigate("/");
    };
    const handleCancel=()=>{
        navigate("/");
    };
  return (
    <div className='container' style={{textAlign:"Center",marginTop:'20px'}}>
        <p style={{color:"red"}}> Are you Sure.. you want to delete the item?</p>
        <button className='btn btn-danger' onClick={deleteUser}>Delete Data</button>
        <button className='btn btn-primary' style={{marginLeft:"20px"}} onClick={handleCancel}>Cancel</button>
    </div>
  )
}