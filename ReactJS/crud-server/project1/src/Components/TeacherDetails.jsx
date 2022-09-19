import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const TeacherDetails = () => {
  const [teacherObj, setteacherObj] = useState({});
  const url="http://localhost:3202/teachers/";
  const urlObj = useParams();
  useEffect(()=>{
    // axios.get(`${url+urlObj.id}`).then((res)=>{
    //   console.log(res.data);
    //   // console.log(urlObj);
    //   setteacherObj(res.data);
    // })
    const teachersData = JSON.parse (localStorage.getItem("Teachers"));
    const teacher = teachersData.find((tch)=>tch.id == urlObj.id);
    setteacherObj(teacher);
  },[])
  return (
    <div className='container'>
      <div className="card">
  <div className="card-body">
    <h5 className="card-title">{teacherObj.username}</h5>
    <p className="card-text">{teacherObj.id}</p>
    <p className="card-text">{teacherObj.email}</p>
    <p className="card-text">{teacherObj.password}</p>
    <Link to={"/teachers"} className="btn btn-primary">Go Back</Link>
  </div>
</div>
    </div>
  )
}
