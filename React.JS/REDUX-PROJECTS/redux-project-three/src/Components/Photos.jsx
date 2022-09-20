import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getAllPhotos } from '../Store/photosslice';

export const Photos = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const photosDetails = useSelector((state) => state.photos);
  console.log(photosDetails)
  console.log(photosDetails.photos)

  localStorage.setItem("photos",JSON.stringify(photosDetails.photos));

  const getPhotos = () =>{
    dispatch(getAllPhotos());
  }

  useEffect(()=>{
    getPhotos();
  },[])

  const handleEdit = (photo) => {
      navigate(`/Edit/${photo.id}`)
  }

  const handleDelete = (photo) => {
    navigate(`/Delete/${photo.id}`)
      
  }
  

  return (
    <div>
      <table  className="table table-bordered border-primary" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>URL</th>
            <th>Thumbnail URL</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
           {photosDetails.photos.map((photo,i)=>{
            return <tr key={i}>
              <td>{photo.id}</td>
              <td>{photo.title}</td>
              <td>{photo.url}</td>
              <td>{photo.thumbnailUrl}</td>
              <td>
                <button type="button" className='btn btn-warning' onClick={()=> handleEdit(photo)}>EDIT</button>
              </td>
              <td>
                <button className='btn btn-danger' type="button" onClick={()=>handleDelete(photo)}>DELETE</button>
              </td>
            </tr>
           })}
        </tbody>
      </table>
    </div>
  )
}
