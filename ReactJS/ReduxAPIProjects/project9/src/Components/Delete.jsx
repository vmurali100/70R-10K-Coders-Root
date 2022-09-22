import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate,useParams } from "react-router-dom";
import { deleteCollegeAction } from '../store/collegesSlice';



export const Delete = () => {
    const dispatch=useDispatch()
    const navigate= useNavigate()
     const college=useParams()//used to read data


    const deleteCollege=()=>{
            dispatch(deleteCollegeAction(college))
                    navigate("/")



    }
    const handleCancel=()=>{
        navigate("/")


    }
  return (
    <div className='container' style={{textAlign:"center",marginTop:'40px'}}>
        <p style={{color:"red"} }>Are you sure.... you want to Delete the College?</p>
        <button className='btn btn-danger'onClick={deleteCollege}>Delete College</button>
        <button className='btn btn-primary' style={{marginLeft:'30px'}} onClick={handleCancel}> Cancel</button>

    </div>
  )
}
