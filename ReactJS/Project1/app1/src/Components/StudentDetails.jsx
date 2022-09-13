import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const StudentDetails = () => {
  const [studentinfo, setstudentinfo] = useState({});

  const urlObj = useParams(); //the data present in urlbased on id it displays it reads the data.
  useEffect(() => {
    // console.log(urlObj);
    // const url = "https://jsonplaceholder.typicode.com/users/";
    // axios.get(url + urlObj.id).then((res) => {
    //   //$:template literals`:back tick,used toadd multiline
    //   console.log(res.data);
    //   setstudentinfo(res.data)
    // });
    const students =JSON.parse(localStorage.getItem("Students"))
     const student=students.find((std)=>std.id==urlObj.id)//==:value matches;===value and data type
     console.log(students)
    setstudentinfo(student)


  
  }, []);
  return (

    <div className="container">
        {Object.keys(studentinfo).length>0&&
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{studentinfo.name}</h5>

          <p><b>Address</b></p>

          <p className="card-text">
          {studentinfo.address.street}
          </p>

          <p className="card-text">
          {studentinfo.address.suite}
          </p>

          <p className="card-text">
          {studentinfo.address.zipcode}
          </p>
          <p><b>Company Details</b></p>
          <p className="card-text">
          {studentinfo.company.name}
          </p>
          <p className="card-text">
          {studentinfo.company.catchphrase}
          </p>
          <p className="card-text">
          {studentinfo.company.bs}
          </p>
          
          <p className="card-text">
          {studentinfo.email}
          </p>
          <p className="card-text">
          {studentinfo.id}
          </p>
          <p className="card-text">
          {studentinfo.name}
          </p>
          <p className="card-text">
          {studentinfo.phone}
          </p>
          <p className="card-text">
          {studentinfo.username}
          </p>
          
          <p className="card-text">
          {studentinfo.website}
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

