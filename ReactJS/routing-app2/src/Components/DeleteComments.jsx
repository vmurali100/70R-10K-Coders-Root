import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const DeleteComments = () => {
  let url="http://localhost:3205/Comments/";
  const objurl = useParams();
 const navigate = useNavigate();
  const deleteComment=()=>{
 axios.delete((url+objurl.id)).then(()=>{
  navigate("/comments");
 })
  }
  return (
    <div>
      <p>Are you sure .., you want to delete the data permanently??</p>
      <button type="button" onClick={deleteComment} className="btn btn-danger">Delete</button>
    </div>
  )
}
