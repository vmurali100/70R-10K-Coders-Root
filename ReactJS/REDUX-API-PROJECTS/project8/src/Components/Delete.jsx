import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deletePhotoAction } from '../store/photosSlice';

export const Delete = () => {
    const dispatch = useDispatch();
    const navigate =useNavigate();
        const photo = useParams();

    const deleteUser=()=>{
        dispatch(deletePhotoAction(photo));
        navigate("/");
    };
    const handleCancel=()=>{
        navigate("/");
    };
  return (
    <div className='container' style={{textAlign:"Center",marginTop:'20px'}}>
        <p style={{color:"red"}}> Are you Sure.. you want to delete the photo?</p>
        <button className='btn btn-danger' onClick={deleteUser}>Delete Data</button>
        <button className='btn btn-primary' style={{marginLeft:"20px"}} onClick={handleCancel}>Cancel</button>
    </div>
  )
}
