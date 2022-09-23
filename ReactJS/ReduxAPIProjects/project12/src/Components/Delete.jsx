import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate,useParams } from "react-router-dom";
import { deleteCalenderAction } from '../store/calendersSlice';



export const Delete = () => {
    const dispatch=useDispatch()
    const navigate= useNavigate()
     const calender=useParams()//used to read data


    const deleteCalender=()=>{
            dispatch(deleteCalenderAction(calender))
                    navigate("/")



    }
    const handleCancel=()=>{
        navigate("/")


    }
  return (
    <div className='container' style={{textAlign:"center",marginTop:'40px'}}>
        <p style={{color:"red"} }>Are you sure.... you want to Delete the Calender?</p>
        <button className='btn btn-danger'onClick={deleteCalender}>Delete Calender</button>
        <button className='btn btn-primary' style={{marginLeft:'30px'}} onClick={handleCancel}> Cancel</button>

    </div>
  )
}
