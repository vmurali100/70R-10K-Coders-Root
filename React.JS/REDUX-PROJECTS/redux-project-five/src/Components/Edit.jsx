import React,{useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {Form} from './Form'
import { useEffect } from 'react'
import { updatePostAction } from '../Store/slice'


export const Edit = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const objUrl = useParams()
  const btnText = "UPDATE"

  const [posts, setposts] = useState({
    id:"",
    title:"",
    body:""
  })

  const handleChange=(e)=>{
    let newPosts = {...posts}
    newPosts[e.target.name] = e.target.value;
    setposts(newPosts)
  }

  useEffect(()=>{
    const info = JSON.parse(localStorage.getItem("posts"));
    const result = info.find((item) => item.id == objUrl.id)
    setposts(result);
  },[])

  const handleUpdate = () => {
    dispatch(updatePostAction(posts))
    navigate("/")
  }


  return (
    <Form btnText={btnText} posts={posts} handleEvent={handleUpdate} handleChangeEvent={handleChange} />
  )
}
