import React,{useState,useEffect} from 'react'
import { CommentForm } from './CommentForm'
import { useDispatch } from 'react-redux';
import { updateComment } from '../CommentsSlice';
import { useNavigate, useParams } from 'react-router-dom';

export const Edit = () => {
  const btnTxt="Update";
  const info = useParams()
  const dispatch = useDispatch();
  const navigate =useNavigate()
  const [cmnt, setCmnt] = useState({
    postId:"",
    id:"",
    name:"",
    title:"",
    body:"",
  })

  const handleChange=(e)=>{
    let newCmnt = {...cmnt};
    newCmnt[e.target.name]= e.target.value;
    setCmnt(newCmnt);
  }

  const handleUpdate=()=>{
    dispatch(updateComment(cmnt));
    navigate('/')
  }
  useEffect(()=>{
    const allCmnts = JSON.parse(localStorage.getItem("Comments"));
    const newCmnt = allCmnts.find((myCmnt)=> myCmnt.id == info.id)
    setCmnt(newCmnt)

  },[])

  return (
    <CommentForm btnTxt={btnTxt} cmnt={cmnt} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
  )
}
