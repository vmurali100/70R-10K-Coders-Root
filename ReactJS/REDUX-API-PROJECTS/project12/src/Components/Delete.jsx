import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteEventAction } from '../store/eventsSlice';

export const Delete = () => {
    const dispatch = useDispatch();
    const navigate =useNavigate();
        const event = useParams();

    const deleteUser=()=>{
        dispatch(deleteEventAction(event));
        navigate("/");
    };
    const handleCancel=()=>{
        navigate("/");
    };
  return (
    <div className='container' style={{textAlign:"Center",marginTop:'20px'}}>
        <p style={{color:"red"}}> Are you Sure.. you want to delete the event?</p>
        <button className='btn btn-danger' onClick={deleteUser}>Delete event</button>
        <button className='btn btn-primary' style={{marginLeft:"20px"}} onClick={handleCancel}>Cancel</button>
    </div>
  )
}
