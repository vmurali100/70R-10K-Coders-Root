import React,{useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {  updateAlbumAction } from '../store/albumsSlice';
import { useEffect } from 'react';
import { UserForm } from './UserForm'



export const Edit = () => {
    const btnText ="Update Album"
    const [album, setalbum] = useState({id:"",userId:"",title:""})
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const albumInfo=useParams()
    const handleUpdate=()=>{
        dispatch(updateAlbumAction(album))
        navigate("/")

        
    }
    const handleChange=(e)=>{//for giving inputs
        let newAlbums={...album}
        newAlbums[e.target.name]=e.target.value
        setalbum(newAlbums)

    }
    useEffect(()=>{
        const allAlbums = JSON.parse(localStorage.getItem("albums"))
        const newAlbum=allAlbums.find((myAlbum)=>myAlbum.id==albumInfo.id);
        setalbum(newAlbum)

    },[])//[] it executes one time
  return (
    <div className='container'>
        <UserForm  btnText={btnText} album={album} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}

