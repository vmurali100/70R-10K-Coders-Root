import React,{useState} from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePost } from '../postsSlice';
import { Form } from './Form'

export const Edit = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const postInfo =useParams();
  const [post, setpost] = useState({
    userId:"",
    id:"",
    title:"",
    body:"",
  
  })

  const handleUpdate=()=>{
    dispatch(updatePost(post))
    navigate('/posts')
  }

  const handleChange=(e)=>{
      let newpost ={...post};
      newpost[e.target.name] =e.target.value;
      setpost(newpost)
  }

  useEffect(()=>{
    const allPosts = JSON.parse(localStorage.getItem("posts"));
    const newPost = allPosts.find((myPost)=> myPost.id == postInfo.id)
    setpost(newPost)

  },[])
 
  const btnTxt="Update"
  return (
    <div>Edit
      <Form btnTxt={btnTxt} post={post} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
    </div>
  )
}
