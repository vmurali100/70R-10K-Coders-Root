/* eslint-disable eqeqeq */
import React,{useState} from 'react'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export const EditComments = () => {
  const urlObj = useParams();
  const navigate = useNavigate();
  let url = "http://localhost:3000/comments/";

  const comment = JSON.parse(localStorage.getItem("Comments"))
  const response = comment.find((comments)=>comments.id == urlObj.id)

  const [comments, setcomments] = useState(response);
  const { postId,id,name,email,body  } = comments ;


  const handleChange = (e) => {
    let newComments = { ...comments };
    newComments[e.target.name] = e.target.value;
    setcomments(newComments);
  };

  const updateComments = () => {
   axios.put(url+urlObj.id,comments).then(()=>{
    navigate("/")
    console.log()
   })
  };
  
  return (
    <div className="container">
      <h2>Edit Comments</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">PostId</label>
          <input
            type="text"
            className="form-control"
            name="postId"
            value={postId}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">ID</label>
          <input
            type="text"
            className="form-control"
            name="id"
            value={id}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
       
        <div className="mb-3">
          <label className="form-label">body</label>
          <input
            type="text"
            className="form-control"
            name="body"
            value={body}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={updateComments}
        >
          Update Comments
        </button>
      </form>
    </div>
  )
}
