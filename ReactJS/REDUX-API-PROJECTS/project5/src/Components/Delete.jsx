import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteProductAction } from '../store/productsSlice';

export const Delete = () => {
    const dispatch = useDispatch();
    const navigate =useNavigate();
        const type = useParams();

    const deleteUser=()=>{
        dispatch(deleteProductAction(type));
        navigate("/");
    };
    const handleCancel=()=>{
        navigate("/");
    };
  return (
    <div className='container' style={{textAlign:"Center",marginTop:'20px'}}>
        <p style={{color:"red"}}> Are you Sure.. you want to delete the type?</p>
        <button className='btn btn-danger' onClick={deleteUser}>Delete Product</button>
        <button className='btn btn-primary' style={{marginLeft:"20px"}} onClick={handleCancel}>Cancel</button>
    </div>
  )
}