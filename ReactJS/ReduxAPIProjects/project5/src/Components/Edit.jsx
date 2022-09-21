import React,{useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {  updatePhotoAction } from '../store/photosSlice';
import { useEffect } from 'react';
import { UserForm } from './UserForm'



export const Edit = () => {
    const btnText ="Update Photo"
    const [photo, setphoto] = useState({id:"",albumId:"",title:"",url:"",thumbnailUrl:""})
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const photoInfo=useParams()
    const handleUpdate=()=>{
        dispatch(updatePhotoAction(photo))
        navigate("/")

        
    }
    const handleChange=(e)=>{//for giving inputs
        let newPhotos={...photo}
        newPhotos[e.target.name]=e.target.value
        setphoto(newPhotos)

    }
    useEffect(()=>{
        const allPhotos = JSON.parse(localStorage.getItem("photos"))
        const newPhoto=allPhotos.find((myPhoto)=>myPhoto.id==photoInfo.id);
        setphoto(newPhoto)

    },[])//[] it executes one time
  return (
    <div className='container'>
        <UserForm  btnText={btnText} photo={photo} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}

