import axios from 'axios';
import React from 'react'
import {  useParams,useNavigate } from "react-router-dom";


export const DeleteStudents = () => {
    const urlObj = useParams();
    const navigate = useNavigate()
    let url = "http://localhost:3000/Students/";
    const deleteStudent=()=>{
        axios.delete(url+urlObj.id).then(()=>{
            navigate("/")
        })
    }
  return (
    <div className='container'>
        <p>Are You Sure ... You Want To Delete ?</p>
        <button onClick={deleteStudent}>Delete Student</button>
    </div>
  )
}
