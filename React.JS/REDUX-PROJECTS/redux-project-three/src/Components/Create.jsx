import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {Form} from './Form'
import {createPhotoAction} from "../Store/photosslice"

export const Create = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const btnText = "Add Photo"
  
  const [photo, setphoto] = useState({
    id:"",
    title:"",
    url:"",
    thumbnailUrl : ""
  });

  const handleCreate=()=>{ 
    dispatch(createPhotoAction(photo))
    navigate("/")  
  }

  const handleChange=(e)=>{
    let newPhoto = {...photo};
    newPhoto[e.target.name] = e.target.value;
    setphoto(newPhoto)

  }
  return (
   <Form btnText={btnText} photo={photo} handleEvent={handleCreate} handleChangeEvent={handleChange}/>
  )
}
