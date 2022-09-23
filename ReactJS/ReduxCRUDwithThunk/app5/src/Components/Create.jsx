import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createPhoto } from '../Store/PhotosSlice';
import { PhotoForm } from './PhotoForm';

export const Create = () => {
    const info = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const btnTxt = "Add";

    const [photo, setphoto] = useState({
        albumId: "",
        id: "",
        title: "",
        url:"",
        thumbnailUrl:""
    })

    const handleChangeEvent=(e)=>{
        let newphoto= {...photo};
        newphoto[e.target.name] = e.target.value;
        setphoto(newphoto);
    }

    const handleCreate=()=>{
        dispatch(createPhoto(photo))
        navigate('/')
    }


    return (
        <div>
            <PhotoForm btnTxt={btnTxt} photo={photo} handleChangeEvent={handleChangeEvent} handleEvent={handleCreate} />

        </div>
    )
}
