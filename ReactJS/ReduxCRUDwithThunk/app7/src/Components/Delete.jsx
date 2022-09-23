import React from 'react'
import { useDispatch } from 'react-redux'
import {Link, useNavigate, useParams} from 'react-router-dom';
import {  deleteProducts } from '../Store/ProductsSlice';

export const Delete = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const objUrl =useParams()

    

    const handleEvent=()=>{
        dispatch(deleteProducts(objUrl,{dispatch}))
        navigate('/')
    }

   

  return (
    <div>
        Are u sure u want to delete??
        <button className='btn btn-danger' type='button' onClick={handleEvent}>Delete</button>
     <Link to={'/'}>  <button type="button" className="btn btn-primary" style={{marginLeft:"10px"}}>Cancel</button></Link>  
    </div>
  )
}
