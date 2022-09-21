import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate,useParams } from "react-router-dom";
import { deletePhotoAction } from '../store/photosSlice';



export const Delete = () => {
    const dispatch=useDispatch()
    const navigate= useNavigate()
     const photo=useParams()//used to read data


    const deletePhoto=()=>{
            dispatch(deletePhotoAction(photo))
                    navigate("/")



    }
    const handleCancel=()=>{
        navigate("/")


    }
  return (
    <div className='container' style={{textAlign:"center",marginTop:'40px'}}>
        <p style={{color:"red"} }>Are you sure.... you want to Delete the Photo?</p>
        <button className='btn btn-danger'onClick={deletePhoto}>Delete Photo</button>
        <button className='btn btn-primary' style={{marginLeft:'30px'}} onClick={handleCancel}> Cancel</button>

    </div>
  )
}
