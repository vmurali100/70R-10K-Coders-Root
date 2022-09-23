import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteNoteAction } from '../store/notesSlice';

export const Delete = () => {
    const dispatch = useDispatch();
    const navigate =useNavigate();
        const note = useParams();

    const deleteUser=()=>{
        dispatch(deleteNoteAction(note));
        navigate("/");
    };
    const handleCancel=()=>{
        navigate("/");
    };
  return (
    <div className='container' style={{textAlign:"Center",marginTop:'20px'}}>
        <p style={{color:"red"}}> Are you Sure.. you want to delete the note?</p>
        <button className='btn btn-danger' onClick={deleteUser}>Delete note</button>
        <button className='btn btn-primary' style={{marginLeft:"20px"}} onClick={handleCancel}>Cancel</button>
    </div>
  )
}
