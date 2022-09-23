import React from 'react'
import {Link,useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { deleteUser } from '../Store/UsersSlice';

export const Delete = () => {
    const dispatch = useDispatch();
    const paramInfo = useParams()
    
    const handleDelete=()=>{
           dispatch(deleteUser(paramInfo))  
    }
  return (
    <div>
        <p>Are u sure you want to delete????</p>
        <Link to={'/'}> <button type="button" onClick={handleDelete}> Delete </button>  </Link>
      <Link to={'/'}> <button type="button"> Cancel </button>  </Link>
    </div>
  )
}
