import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { getAllPhotos } from '../store/photosSlice';

export const Photos = () => {
   const photosDetails =  useSelector((state)=>state.photos);

   console.log(photosDetails.photos)

   
   localStorage.setItem('photos',JSON.stringify(photosDetails.photos))
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const getphotos=()=>{
    dispatch(getAllPhotos());
   }
   
   useEffect(()=>{
        getphotos()
   },[])
   const handleDelete = (photo) => {
    navigate(`delete/${photo.id}`)
    // dispatch(deleteUser(photo))
}

const handleEdit = (photo) => {
    navigate(`edit/${photo.id}`)
}
  return (
    <div className='container'>

        {/* <button onClick={getphotos} className= 'btn btn-primary'>Get photo</button> */}

        <table className="table table-success table-striped">
            <thead>
                <tr>
                    <th >ID</th>
                    <th >albumId</th>
                    <th >Title</th>
                    <th>url</th>
                    <th>ThumbnailUrl</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {photosDetails.photos.map((photo, i) => (
                    <tr key={i}>
                        <td>{photo.id}</td>
                        <td>{photo.albumId}</td>
                        <td>{photo.title}</td>
                        <td>{photo.url}</td>
                        <td>{photo.thumbnailUrl}</td>
                        <td><button className='btn btn-warning' onClick={() => { handleEdit(photo) }}>Edit</button></td>
                        <td><button className='btn btn-danger' onClick={() => { handleDelete(photo) }}>Delete</button></td>
                    </tr>))}
            </tbody>
        </table>
        
    </div>
  )
}
