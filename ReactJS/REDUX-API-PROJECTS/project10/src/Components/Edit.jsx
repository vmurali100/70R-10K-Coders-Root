import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateAlbumAction } from '../store/albumsSlice';
import { UserForm } from './UserForm'

export const Edit = () => {
    const btnText =" Update album";
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const albumInfo = useParams();

    const [album, setalbum] = useState({
        id:"",
        userid:"",
        title:""
    })

    const handleUpdate=()=>{
        dispatch(updateAlbumAction(album));
        navigate("/")
    };
    const handleChange=(e)=>{
        let newAlbum = {...album};
        newAlbum[e.target.name] = e.target.value;
        setalbum(newAlbum)
    };
    useEffect(()=>{
            const allAlbums = JSON.parse(localStorage.getItem("albums"))
            const newAlbum = allAlbums.find((myAlbum)=>myAlbum.id == albumInfo.id);
            setalbum(newAlbum);
    },[])// [] we are asking to execute only one time
  return (
    <div className="container">
            <UserForm btnText={btnText} album={album} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}
