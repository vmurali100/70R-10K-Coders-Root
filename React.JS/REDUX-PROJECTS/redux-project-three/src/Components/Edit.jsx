import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form } from './Form'
import {useDispatch} from 'react-redux'
import { updatePhotoAction } from '../Store/photosslice'
import { useEffect } from 'react'

export const Edit = () => {

  const objUrl = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const btnText = "UPDATE DATA"

  const [photo, setphoto] = useState({});

  useEffect(()=>{
    const info = JSON.parse(localStorage.getItem("photos"));
    const result = info.find((item) => item.id == objUrl.id);
    setphoto(result)
},[])


  const handleChange = (e) => {
     let newPhoto = {...photo}
     newPhoto[e.target.name] = e.target.value;
     setphoto(newPhoto)
  }

  const handleUpdate = () => {
    dispatch(updatePhotoAction(photo));
    navigate("/")

  }


  return (
    <Form btnText={btnText} photo={photo} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
  )
}
