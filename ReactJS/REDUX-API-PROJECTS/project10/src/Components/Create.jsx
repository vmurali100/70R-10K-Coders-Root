import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createAlbumAction } from '../store/albumsSlice'
import { UserForm } from './UserForm'

export const Create = () => {
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const [album, setalbum] = useState({
        id:"",
        userId:"",
        title:""
    })
    const btnText = "Add album Detail"

    const handleCreate=()=>{
        dispatch(createAlbumAction(album))
        navigate('/')
    }
    const handleChange=(e)=>{
        let newAlbum = {...album};
        newAlbum[e.target.name] = e.target.value;
        setalbum(newAlbum)
    }
    return (
        <div className="container">
            <UserForm btnText={btnText} album={album} handleEvent={handleCreate} handleChangeEvent={handleChange}/>

        </div>

    )
}