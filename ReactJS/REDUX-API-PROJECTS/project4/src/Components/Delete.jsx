import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate,useParams } from "react-router-dom";
import { deleteCommentAction } from '../store/commentsSlice';



export const Delete = () => {
    const dispatch=useDispatch()
    const navigate= useNavigate()
     const comment=useParams()//used to read data


    const deleteComment=()=>{
            dispatch(deleteCommentAction(comment))
                    navigate("/")
    }
    const handleCancel=()=>{
        navigate("/")

    }
  return (
    <div className='container' style={{textAlign:"center",marginTop:'40px'}}>
        <p style={{color:"red"} }>Are you sure.... you want to Delete the Comment?</p>
        <button className='btn btn-danger'onClick={deleteComment}>Delete Comment</button>
        <button className='btn btn-primary' style={{marginLeft:'30px'}} onClick={handleCancel}> Cancel</button>

    </div>
  )
}