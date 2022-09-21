import axios from "axios"
import React, { useEffect,useState } from 'react'
import { Link,useParams } from "react-router-dom"

export const StudentDetails = () => {
    const [studentInfo, setstudentInfo] = useState({})
    const urlObj = useParams()
    useEffect(() => {
        console.log(urlObj)
       // const url = "http://localhost:3000/students/";
       // axios.get(`${url + urlObj.id}`).then((res) => {
           // console.log(res.data)
          //  setstudentInfo(res.data)
       // })
       const students = JSON.parse(localStorage.getItem("Students"))
    const student = students.find((std)=>std.id == urlObj.id)
    setstudentInfo(student);
   
    }, [])
    return (
        <div className="container">
            {Object.keys(studentInfo).length > 0 &&  <div className="card-body">

          <h5 className="card-title">{studentInfo.id}</h5>
          <p className="card-text">{studentInfo.username}</p>
          <p className="card-text">{studentInfo.email}</p>
          <p className="card-text">{studentInfo.password}</p>
          
          <Link className="btn btn-primary" to="/">
            Go To Students
            </Link>
          <a href="#"></a>
        </div>}
      </div>
        
        
    )
}
