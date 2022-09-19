import axios from 'axios';
import React from 'react'
import {useNavigate,useParams} from 'react-router-dom'

export const DeletePost = () => {
  const navigate = useNavigate();
  let url="http://localhost:3201/ReactPosts/";
  const objurl= useParams();

  const deletepost=()=>{
    axios.delete(url+objurl.id).then(()=>{
      navigate("/posts")
    })
  }

  return (
    <div>
      <p>Do you want to delete the Post?</p>
      <button onClick={deletepost} className="btn btn-danger" type="button">Delete </button>
    </div>
  )
}
