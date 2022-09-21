import React,{useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {  updateCommentAction } from '../store/commentsSlice';
import { useEffect } from 'react';
import { UserForm } from './UserForm'



export const Edit = () => {
    const btnText ="Update Comment"
    const [comment, setcomment] = useState({
        id:"",
        name:"",
        email:"",
        body:""
    })
    const dispatch=useDispatch();
    const navigate=useNavigate()

    const commentInfo=useParams()
    
    const handleUpdate=()=>{
        dispatch(updateCommentAction(comment))
        navigate("/")

        
    }
    const handleChange=(e)=>{
        let newComments={...comment}
        newComments[e.target.name]=e.target.value
        setcomment(newComments)

    }
    useEffect(()=>{
        const allComments = JSON.parse(localStorage.getItem("comments"))
        const newComment=allComments.find((myComment)=>myComment.id==commentInfo.id);
        setcomment(newComment)

    },[])//[] it executes one time
  return (
    <div className='container'>
        <UserForm  btnText={btnText} comment={comment} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}