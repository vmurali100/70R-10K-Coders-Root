import React from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'

export const DeletePhotos = () => {
    let url="http://localhost:3306/Photos/";
    const objurl= useParams();
    const navigate =  useNavigate();

    const deletePhoto =()=>{
        axios.delete(url+objurl.id).then(()=>{
            navigate("/photos");
        })
    }
  return (
    <div>
        <h2>Are you sure u want to delete???</h2>
        <button type='button' className='btn btn-danger' onClick={deletePhoto}>Delete</button>
    </div>
  )
}
