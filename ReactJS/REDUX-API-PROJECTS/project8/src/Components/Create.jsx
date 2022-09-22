import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPhotoAction } from '../store/photosSlice'
import { UserForm } from './UserForm'

export const Create = () => {
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const [photo, setphoto] = useState({
        id:"",
        albumId:"",
        title:"",
        url:"",
        thumbnailUrl:""
        
    })
    const btnText = "Add photo Detail"

    const handleCreate=()=>{
        dispatch(createPhotoAction(photo))
        navigate('/')
    }
    const handleChange=(e)=>{
        let newPhoto = {...photo};
        newPhoto[e.target.name] = e.target.value;
        setphoto(newPhoto)
    }
    return (
        <div className="container">
            <UserForm btnText={btnText} photo={photo} handleEvent={handleCreate} handleChangeEvent={handleChange}/>

        </div>

    )
}