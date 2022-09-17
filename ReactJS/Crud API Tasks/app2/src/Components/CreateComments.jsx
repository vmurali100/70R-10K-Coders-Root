import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreateComments = () => {
  const [comments, setcomments] = useState({
    postId: "",
    id:"",
    name:"",
    email: "",
    body:""
  });
  const { postId,id,name,email,body  } =comments ;
  const navigate = useNavigate();
  const submitComments = () => {
    axios.post("http://localhost:3000/comments/", comments).then(() => {
      navigate("/");
    });
  };
  const handleChange = (e) => {
    let newComments = { ...comments };
    newComments[e.target.name] = e.target.value;
    setcomments(newComments);
  };
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label className="form-label">postId</label>
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
          <label className="form-label">id</label>
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
          <label className="form-label">name</label>
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
          onClick={submitComments}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
