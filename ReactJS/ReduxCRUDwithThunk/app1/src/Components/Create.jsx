import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../postsSlice'
import  {Form}  from './Form'

export const Create = () => {
  const btnTxt= "Add"
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [post, setpost] = useState({
    userId:"",
    id:"",
    title:"",
    body:"",
  
  })
  const handleCreate=()=>{
    dispatch(createPost(post))
    navigate('/posts')
  }

  const handleChange=(e)=>{
      let newpost ={...post};
      newpost[e.target.name] =e.target.value;
      setpost(newpost)
  }
  return (
    <div className='container'> create
      <Form btnTxt={btnTxt} post={post} handleEvent={handleCreate} handleChangeEvent={handleChange}/>
    </div>
  )
}
