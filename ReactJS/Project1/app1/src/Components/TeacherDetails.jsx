import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const TeacherDetails = () => {
  const [teacherinfo, setteacherinfo] = useState({});

  const urlObj = useParams(); //the data present in urlbased on id it displays it reads the data.
  useEffect(() => {
    // console.log(urlObj);
    // const url = "https://jsonplaceholder.typicode.com/users/";
    // axios.get(url + urlObj.id).then((res) => {
    //   //$:template literals`:back tick,used toadd multiline
    //   console.log(res.data);
    //   setteacherinfo(res.data)
    // });
    const teachers =JSON.parse(localStorage.getItem("Teachers"))
     const teacher=teachers.find((tch)=>tch.id==urlObj.id)//==:value matches;===value and data type
     console.log(teachers)
    setteacherinfo(teacher)


  
  }, []);
  return (

    <div className="container">
        {/* {Object.keys(teacherinfo).length>0&& */}
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{teacherinfo.userid}</h5>

          
          
          
          <p className="card-text">
          {teacherinfo.id}
          </p>
          <p className="card-text">
          {teacherinfo.title}
          </p>
          <p className="card-text">
          {teacherinfo.body}
          </p>
          
          <Link className="btn btn-primary" to ="/Teachers">Go To Teachers</Link>
          <a href="#" >
            
          </a>
        </div>

      </div>

    </div>
  );
};

