import React,{useState} from 'react'
  import { useDispatch } from 'react-redux';
  import { createCommentAction } from '../store/commentsSlice';
  import { useNavigate } from "react-router-dom";
  import { UserForm } from './UserForm'

  
  
  export const Create = () => {
      const btnText ="Add Comment";
      const [comment, setcomment] = useState({
        id:"",
        name:"",
        email:"",
        body:""
    })
      const dispatch=useDispatch();
      const navigate=useNavigate()
      
      const handleCreate=()=>{
          dispatch(createCommentAction(comment))
          navigate("/")
  
          
      }
      const handleChange=(e)=>{//for giving inputs
          let newComments={...comment}
          newComments[e.target.name]=e.target.value
          setcomment(newComments)
  
      }
  
    return (    
      <div className="container">
          <UserForm btnText={btnText} comment={comment} handleEvent={handleCreate} handleChangeEvent={handleChange}/>
          
  </div>
  
    )}