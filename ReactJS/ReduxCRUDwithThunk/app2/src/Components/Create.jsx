import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createCmnt } from '../CommentsSlice'
import { CommentForm } from './CommentForm'

export const Create = () => {
  const btnTxt= "Add"
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [cmnt, setCmnt] = useState({
    postId:"",
    id:"",
    name:"",
    email:"",
    body:"",
  
  })
  const handleCreate=()=>{
    dispatch(createCmnt(cmnt))
    navigate('/')
  }

  const handleChange=(e)=>{
      let newCmnt ={...cmnt};
      newCmnt[e.target.name] =e.target.value;
      setCmnt(newCmnt)
  }
  return (
    <div className='container'>
      <CommentForm btnTxt={btnTxt} cmnt={cmnt} handleEvent={handleCreate} handleChangeEvent={handleChange}/>
    </div>
  )
}
