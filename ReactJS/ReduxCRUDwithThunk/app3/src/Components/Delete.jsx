import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {useDispatch} from 'react-redux';
import { deleteAlbum } from '../Store/AlbumsSlice';

export const Delete = () => {
    const dispatch =useDispatch();
    const slcted = useParams()
    const handleDelete=()=>{
        dispatch(deleteAlbum(slcted))
    }
  return (
    <div>

        <p>Are u sure u want to delete the record??</p>
        <p><Link to={'/'}><button type="button" onClick={handleDelete}>Delete</button></Link>
        <Link to={'/'}><button type="button" >Cancel</button></Link></p>
    </div>
  )
}
