import axios from 'axios';
import React from 'react'
import {  useParams,useNavigate,Link } from "react-router-dom";


export const DeleteComments = () => {
  const urlObj = useParams();
    const navigate = useNavigate()
    let url = "http://localhost:3002/comments/";
    const deleteComments=()=>{
        axios.delete(url+urlObj.id).then(()=>{
            navigate("/")
        })
    }
  return (
    <div className='container' style={{marginTop:"40px"}}>
        <p>Are You Sure ... You Want To Delete ?</p>
        <button onClick={deleteComments}className="btn btn-danger">Delete Comments</button>
        <Link to="/" className="btn btn-primary" style={{marginLeft:"10px"}}>
          Cancel
        </Link>
    </div>
  )
}
