import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate,useParams } from "react-router-dom";
import { deleteObjectAction } from '../store/objectsSlice';



export const Delete = () => {
    const dispatch=useDispatch()
    const navigate= useNavigate()
     const object=useParams()//used to read data


    const deleteObject=()=>{
            dispatch(deleteObjectAction(object))
                    navigate("/")



    }
    const handleCancel=()=>{
        navigate("/")


    }
  return (
    <div className='container' style={{textAlign:"center",marginTop:'40px'}}>
        <p style={{color:"red"} }>Are you sure.... you want to Delete the Object?</p>
        <button className='btn btn-danger'onClick={deleteObject}>Delete Object</button>
        <button className='btn btn-primary' style={{marginLeft:'30px'}} onClick={handleCancel}> Cancel</button>

    </div>
  )
}
