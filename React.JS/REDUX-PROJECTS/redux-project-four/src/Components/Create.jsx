import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCommentAction } from '../Store/slice';
import {Form} from './Form'

export const Create = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const btnText = "Add Comment"
  
  const [comment, setcomment] = useState({
    postId : "",
    id : "",
    name : "",
    email : "",
    body : ""
  });

  const handleChange=(e)=>{
    let newComment = {...comment};
    newComment[e.target.name] = e.target.value;
    setcomment(newComment)
  };

  const addComment = () => {
    dispatch(addCommentAction(comment));
    navigate("/")
  }


  return (
    <Form comment={comment} btnText={btnText} handleEvent={addComment} handleChangeEvent={handleChange} />
  )
}
