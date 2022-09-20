import React, { useEffect,useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom';
import { editCommentAction } from '../Store/slice';
import { Form } from './Form'

export const Edit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const btnText = "UPDATE"
  const objUrl = useParams()

  const [comment, setcomment] = useState({})


  useEffect(()=>{
    const info = JSON.parse(localStorage.getItem("comments"))
    const result = info.find((item)=> item.id == objUrl.id )
    setcomment(result)
  },[])


  const handleChange=(e)=>{
    let newComment = {...comment};
    newComment[e.target.name] = e.target.value;
    setcomment(newComment);
  }

  const handleEdit = () => {
    dispatch(editCommentAction(comment))
    navigate("/")
  }

  


  return (
   <Form btnText={btnText} handleEvent={handleEdit} handleChangeEvent={handleChange} comment={comment} />
  )
}
