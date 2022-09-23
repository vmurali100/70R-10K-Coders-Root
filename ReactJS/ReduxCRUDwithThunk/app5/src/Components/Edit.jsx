import React, { useState } from 'react'
import { PhotoForm } from './PhotoForm'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePhoto } from '../Store/PhotosSlice';
import { useEffect } from 'react';

export const Edit = () => {
  const btnTxt = 'Update';
  const [photo, setphoto] = useState({
    albumId: "",
    id: "",
    title: "",
    url: "",
    thunbnailUrl: "",
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const info = useParams();

  const handleChangeEvent=(e)=>{
  let newphoto = {...photo}
  newphoto[e.target.name] = e.target.value;
  setphoto(newphoto);
  }

  const handleChange=()=>{
    dispatch(updatePhoto(photo))
    navigate('/')
  }

  useEffect(()=>{
    const  allNewPhotos = JSON.parse(localStorage.getItem('ReduxPhotos'));
    const  newPhotos = allNewPhotos.find((myPhoto)=> myPhoto.id == info.id)
    setphoto(newPhotos);
  },[])

  return (
    <div>
      <PhotoForm btnTxt={btnTxt} photo={photo} handleChangeEvent={handleChangeEvent} handleEvent={handleChange}/>


    </div>
  )
}
