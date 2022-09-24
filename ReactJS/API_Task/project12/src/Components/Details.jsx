import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Details = () => {
  const [teacher, setteacher] = useState({});

  const urlObj = useParams(); //the data present in urlbased on id it displays it reads the data.
  useEffect(() => {
    
    
    const teachers =JSON.parse(localStorage.getItem("users"))
     const teacher=teachers.find((std)=>std.id==urlObj.id)//
     console.log(teachers)
    setteacher(teacher)


  
  }, []);
  return (

    <div className="container">
        {Object.keys(teacher).length>0&&
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{teacher.id}</h5>
           

          <p className="card-text">
          {teacher.fname}
          </p>
          <p className="card-text">
          {teacher.lname}
          </p>
          <p className="card-text">
          {teacher.city}
          </p>

          
          <Link className="btn btn-primary" to ="/">Go To teachers</Link>
          <a href="a" >
            
          </a>
        </div>

      </div>
}
    </div>
  );
};
