import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createAlbum } from '../Store/AlbumsSlice';
import { AlbumsForm } from './AlbumsForm'

export const Create = () => {
    const info = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const btnTxt = "Add";

    const [albm, setalbm] = useState({
        userId: "",
        id: "",
        title: "",
    })

    const handleChangeEvent=(e)=>{
        let newalbm= {...albm};
        newalbm[e.target.id] = e.target.value;
        setalbm(newalbm);
    }

    const handleCreate=()=>{
        dispatch(createAlbum(albm))
        navigate('/')
    }


    return (
        <div>
            <AlbumsForm btnTxt={btnTxt} albm={albm} handleChangeEvent={handleChangeEvent} handleChange={handleCreate} />

        </div>
    )
}
