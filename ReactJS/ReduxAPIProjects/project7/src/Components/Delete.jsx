import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate,useParams } from "react-router-dom";
import { deleteDetailAction } from '../store/detailsSlice';



export const Delete = () => {
    const dispatch=useDispatch()
    const navigate= useNavigate()
     const detail=useParams()//used to read data


    const deleteDetail=()=>{
            dispatch(deleteDetailAction(detail))
                    navigate("/")



    }
    const handleCancel=()=>{
        navigate("/")


    }
  return (
    <div className='container' style={{textAlign:"center",marginTop:'40px'}}>
        <p style={{color:"red"} }>Are you sure.... you want to Delete the Detail?</p>
        <button className='btn btn-danger'onClick={deleteDetail}>Delete Detail</button>
        <button className='btn btn-primary' style={{marginLeft:'30px'}} onClick={handleCancel}> Cancel</button>

    </div>
  )
}
