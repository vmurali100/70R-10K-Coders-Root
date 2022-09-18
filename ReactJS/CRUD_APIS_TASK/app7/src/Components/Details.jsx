import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Details = () => {
  const [detail, setdetail] = useState({});

  const urlObj = useParams(); //the data present in urlbased on id it displays it reads the data.
  useEffect(() => {
    
    
    const details =JSON.parse(localStorage.getItem("Details"))
     const detail=details.find((std)=>std.id==urlObj.id)//
     console.log(details)
    setdetail(detail)


  
  }, []);
  return (

    <div className="container">
        {Object.keys(detail).length>0&&
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{detail.id}</h5>


          

          <p className="card-text">
          {detail.fname}
          </p>
          <p className="card-text">
          {detail.lname}
          </p>
          
          
          <Link className="btn btn-primary" to ="/">Go To Details</Link>
          <a href="a" >
            
          </a>
        </div>

      </div>
}
    </div>
  );
};

