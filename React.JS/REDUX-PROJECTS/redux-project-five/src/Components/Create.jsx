import React,{useState} from 'react'
import { Form } from './Form';
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addPostAction } from '../Store/slice';

export const Create = () => {
    const [posts, setposts] = useState({
        id:"",
        title : "",
        body : ""
    });

    const navigate = useNavigate();

    const dispatch = useDispatch()

    const btnText = "ADD POST"
 
    const handleChange=(e)=>{
        let newPosts = {...posts}
        newPosts[e.target.name] = e.target.value;
        setposts(newPosts)
    }

    const addPost=()=>{
         dispatch(addPostAction(posts));
         navigate("/")
    }



  return (
  <Form btnText={btnText} handleEvent={addPost} handleChangeEvent={handleChange} posts={posts} />
  )
}
