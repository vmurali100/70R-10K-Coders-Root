import React from 'react'
import {Link,useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { deletePhoto } from '../Store/PhotosSlice';

export const Delete = () => {
  const dispatch = useDispatch();
 const info = useParams();

  const handleDelete=()=>{
    dispatch(deletePhoto(info))
  }
  return (
    <div> <p>Are you sure u want to delete??</p>
      
      <Link to={'/'}> <button type="button" onClick={handleDelete}> Delete </button>  </Link>
      <Link to={'/'}> <button type="button"> Cancel </button>  </Link>
    </div>
  )
}
