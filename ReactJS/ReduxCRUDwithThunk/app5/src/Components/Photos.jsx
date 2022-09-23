import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import moduleName from '../';
import { getAllPhotos } from '../Store/PhotosSlice';
import {Link} from 'react-router-dom';

export const Photos = () => {
    const allPhotoDetails = useSelector((state)=> state.photos);
    console.log(allPhotoDetails.photos)
    localStorage.setItem('ReduxPhotos',JSON.stringify(allPhotoDetails.photos))
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllPhotos())
         },[])
  return (
    <div className='container'> <p><Link to={'/create'}> <button type='button' className='btn btn-primary'> CreateNew</button></Link></p>
    
    <>
    {allPhotoDetails.photos.map((photo,i)=> <div className='alldetails' key={i}>
    <p>{photo.albumId}</p>
    <p>{photo.id}</p>
    <p>{photo.title}</p>
    <p>{photo.url}</p>
    <p>{photo.thumbnailUrl}</p>
    <p> <Link to={`/edit/${photo.id}`}> <button type="button" className='btn btn-primary'>Edit</button>
    </Link> </p> <p> <Link to={`/delete/${photo.id}`}> <button type="button" className='btn btn-primary'>Delete</button></Link></p>
    </div>)}
    </>
</div>
  )
}
