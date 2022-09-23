import React from 'react'
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { json, Link } from 'react-router-dom';
import { getAlbumsData } from '../Store/AlbumsSlice';

export const Albums = () => {
    const AlbumsData = useSelector((state)=> state.Albums)
    console.log(AlbumsData.Albums)
    localStorage.setItem("ReduxAlbums",JSON.stringify(AlbumsData.Albums))

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAlbumsData())
    },[])
  return (
    <div className='container'> <p><Link to={'/create'}> <button type='button' className='btn btn-primary'> CreateNew</button></Link></p>
    
    <>
    {AlbumsData.Albums.map((albm,i)=> <div className='alldetails' key={i}>
    <p>{albm.userId}</p>
    <p>{albm.id}</p>
    <p>{albm.title}</p>
    <p> <Link to={`/edit/${albm.id}`}> <button type="button" className='btn btn-primary'>Edit</button></Link>  <Link to={`/delete/${albm.id}`}> <button type="button" className='btn btn-primary'>Delete</button></Link></p>
    </div>)}
    </>
</div>
  )
}
