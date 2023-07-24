import React from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const DeleteStudent = () => {
    const ulrObj = useParams();
    const navigate = useNavigate();

    let url = "http://localhost:4000/students/";

    const handleDelete = ()=>{
        axios.delete(url+ulrObj.id).then(()=>{
            navigate("/")
        })
    }
  return (
    <div className='container'>
        <p>Are you Sure .. You Want to Delete ?</p>
        <button onClick={handleDelete} >Delete User</button>
    </div>
  )
}
