import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Details = () => {
  const [college, setcollege] = useState({});

  const urlObj = useParams(); //the data present in urlbased on id it displays it reads the data.
  useEffect(() => {
    
    
    const colleges =JSON.parse(localStorage.getItem("Colleges"))
     const college=colleges.find((std)=>std.id==urlObj.id)//
     console.log(colleges)
    setcollege(college)


  
  }, []);
  return (

    <div className="container">
        {Object.keys(college).length>0&&
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{college.id}</h5>
           

          <p className="card-text">
          {college.university}
          </p>
          <p className="card-text">
          {college.institute}
          </p>
          <p className="card-text">
          {college.branch}
          </p>
          <p className="card-text">
          {college.degree}
          </p>
          <p className="card-text">
          {college.experience}
          </p>
          <p className="card-text">
          {college.yourwebsiteorblog}
          </p>


          
          
          <Link className="btn btn-primary" to ="/">Go To Colleges</Link>
          <a href="a" >
            
          </a>
        </div>

      </div>
}
    </div>
  );
};

