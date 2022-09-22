import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteAlbumAction } from '../store/albumsSlice';

export const Delete = () => {
    const dispatch = useDispatch();
    const navigate =useNavigate();
        const album = useParams();

    const deleteUser=()=>{
        dispatch(deleteAlbumAction(album));
        navigate("/");
    };
    const handleCancel=()=>{
        navigate("/");
    };
  return (
    <div className='container' style={{textAlign:"Center",marginTop:'20px'}}>
        <p style={{color:"red"}}> Are you Sure.. you want to delete the album?</p>
        <button className='btn btn-danger' onClick={deleteUser}>Delete album</button>
        <button className='btn btn-primary' style={{marginLeft:"20px"}} onClick={handleCancel}>Cancel</button>
    </div>
  )
}
