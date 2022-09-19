import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

export const StudentDetails = () => {
  const [studentInfo, setstudentInfo] = useState({});
  const urlObj =useParams()
 useEffect(()=>{
  // const url="http://localhost:3201/students/";
  // console.log(urlObj);
  // axios.get(`${url+urlObj.id}`).then((res)=>{
  //   console.log(res.data)
  //   setstudentInfo(res.data);
  // })
  const students = JSON.parse(localStorage.getItem("Students"))
  const student = students.find((std)=>std.id == urlObj.id)
  setstudentInfo(student);

 },[])
  return (
    <div className='container'>
    {Object.keys(studentInfo).length >0 &&   <div className="card" >  
  <div className="card-body">
    <h5 className="card-title">{studentInfo.sname}</h5>
    <p className="card-text">
      {studentInfo.phone};
    </p>
    <p className="card-text">
      {studentInfo.username};
    </p>
    <p className="card-text">
      {studentInfo.website};
    </p>  
      <h6>Address Details</h6>
      <p className="card-text">
      {studentInfo.address.street};
    </p>
    <p className="card-text">
      {studentInfo.address.suite};
    </p>
    <p className="card-text">
      {studentInfo.address.zipcode};
    </p>
    <Link to="/students" className="btn btn-primary">
    Go Back
      </Link>
  </div>
</div>}
    </div>
  )
}
