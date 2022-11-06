import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { getAllAlbums } from '../store/albumsSlice';

export const Albums = () => {
   const albumsDetails =  useSelector((state)=>state.albums);

   console.log(albumsDetails.albums)

   
   localStorage.setItem('albums',JSON.stringify(albumsDetails.albums))
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const getalbums=()=>{
    dispatch(getAllAlbums());
   }
   
   useEffect(()=>{
        getalbums()
   },[])
   const handleDelete = (album) => {
    navigate(`delete/${album.id}`)
    // dispatch(deleteUser(album))
}

const handleEdit = (album) => {
    navigate(`edit/${album.id}`)
}
  return (
    <div className='container'>

        {/* <button onClick={getalbums} className= 'btn btn-primary'>Get album</button> */}

        <table className="table table-success table-striped">
            <thead>
                <tr>
                    <th >ID</th>
                    <th >UserId</th>
                    <th >Title</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {albumsDetails.albums.map((album, i) => (
                    <tr key={i}>
                        <td>{album.id}</td>
                        <td>{album.userId}</td>
                        <td>{album.title}</td>
                        <td><button className='btn btn-warning' onClick={() => { handleEdit(album) }}>Edit</button></td>
                        <td><button className='btn btn-danger' onClick={() => { handleDelete(album) }}>Delete</button></td>
                    </tr>))}
            </tbody>
        </table>
        
    </div>
  )
}