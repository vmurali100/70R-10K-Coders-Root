import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePhotoAction } from '../store/photosSlice';
import { UserForm } from './UserForm'

export const Edit = () => {
    const btnText =" Update photo";
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const photoInfo = useParams();

    const [photo, setphoto] = useState({
        id:"",
        albumId:"",
        title:"",
        url:"",
        thumbnailUrl:""
    })

    const handleUpdate=()=>{
        dispatch(updatePhotoAction(photo));
        navigate("/")
    };
    const handleChange=(e)=>{
        let newPhoto = {...photo};
        newPhoto[e.target.name] = e.target.value;
        setphoto(newPhoto)
    };
    useEffect(()=>{
            const allPhotos = JSON.parse(localStorage.getItem("photos"))
            const newPhoto = allPhotos.find((myPhoto)=>myPhoto.id == photoInfo.id);
            setphoto(newPhoto);
    },[])// [] we are asking to execute only one time
  return (
    <div className="container">
            <UserForm btnText={btnText} photo={photo} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}
