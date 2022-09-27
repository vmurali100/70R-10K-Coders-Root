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

          <h5 className="card-title">{studentInfo.name}</h5>
          <p className="card-text">{studentInfo.phone}</p>
          <p className="card-text">{studentInfo.username}</p>
          <p className="card-text">{studentInfo.website}</p>
          <p className="card-text">{studentInfo.website}</p>
          <p>
          <b>Company Details</b>
          </p>
          <p className="card-text">{studentInfo.company.name}</p>
          <p className="card-text">{studentInfo.company.catchPhrase}</p>
          <p className="card-text">{studentInfo.company.bs}</p>

          <p>
            <b>Address</b>
          </p>
          <p className="card-text">{studentInfo.address.street}</p>
          <p className="card-text">{studentInfo.address.suite}</p>
          <p className="card-text">{studentInfo.address.zipcode}</p>
          <Link className="btn btn-primary" to="/">
            Go To Students
            </Link>
          <a href="#"></a>
        </div>}
      </div>
        
        
    )
}
