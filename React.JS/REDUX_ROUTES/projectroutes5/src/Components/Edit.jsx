import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

export const Edit = () => {
    let url = "http://localhost:3202/comments/"

    const objUrl = useParams()

    const comment = JSON.parse(localStorage.getItem("comments"))

    const result = comment.find((com) => com.id == objUrl.id)

    const [comments, setcomments] = useState(result)

    const navigate = useNavigate()

    const handleChange = e => {
        let newComment = {...comments}
        newComment[e.target.name] = e.target.value
        setcomments(newComment)
    };

    const updateComment = () => {
        axios.put(url+objUrl.id,comments).then(()=>{
                navigate("/");
        });
        
    };

  return (
    <div>
        <form>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID :</label>
                    <input type="text" name='id' value={comments.id} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>
                
                <div className="mb-3">
                    <label htmlFor="postId" className="form-label">Post ID : :</label>
                    <input type="text" name='postId' value={comments.postId} onChange={(e)=>{handleChange(e)}}  className="form-control"  />
                
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name :</label>
                    <input type="text" name='name' value={comments.name} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email :</label>
                    <input type="text" name='email' value={comments.email} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>

                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Body :</label>
                    <input type="text" name='body' value={comments.body} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>

                
                <button type="button" className='btn btn-primary' onClick={updateComment}>Update Comment</button>

                
            </form>
    </div>
    
  );
};
