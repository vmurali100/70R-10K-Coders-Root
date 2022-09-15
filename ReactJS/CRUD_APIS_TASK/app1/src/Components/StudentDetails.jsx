import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const StudentDetails = () => {
  const [studentinfo, setstudentinfo] = useState({});

  const urlObj = useParams(); //the data present in urlbased on id it displays it reads the data.
  useEffect(() => {
    // console.log(urlObj);
    // const url = "http://localhost:4002/post/";
    // axios.get(url + urlObj.id).then((res) => {
    //   //$:template literals`:back tick,used toadd multiline
    //   console.log(res.data);
    //   setstudentinfo(res.data)
    // });
    const students =JSON.parse(localStorage.getItem("Students"))
     const student=students.find((std)=>std.id==urlObj.id)//
     console.log(students)
    setstudentinfo(student)


  
  }, []);
  return (

    <div className="container">
        {Object.keys(studentinfo).length>0&&
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{studentinfo.id}</h5>


          <p className="card-text">
          {studentinfo.email}
          </p>

          <p className="card-text">
          {studentinfo.username}
          </p>
          
          <Link className="btn btn-primary" to ="/">Go To Students</Link>
          <a href="#" >
            
          </a>
        </div>

      </div>
}
    </div>
  );
};

