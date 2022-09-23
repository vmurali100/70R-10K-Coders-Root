import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Details = () => {
  const [calenderinfo, setcalenderinfo] = useState({});

  const urlObj = useParams(); //the data present in urlbased on id it displays it reads the data.
  useEffect(() => {
    
    const calenders =JSON.parse(localStorage.getItem("calenders"))
     const calender=calenders.find((std)=>std.id==urlObj.id)//
     console.log(calenders)
    setcalenderinfo(calender)


  
  }, []);
  return (

    <div className="container">
        {Object.keys(calenderinfo).length>0&&
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{calenderinfo.id}</h5>

          
          

          <p className="card-text">
          {calenderinfo.username}
          </p>
          <p className="card-text">
          {calenderinfo.password}
          </p>
          <p className="card-text">
          {calenderinfo.emailaddress}
          </p>
          <p className="card-text">
          {calenderinfo.dateofbirth}
          </p>
          <p className="card-text">
          {calenderinfo.height}
          </p>
          <p className="card-text">
          {calenderinfo.weight}
          </p>
          
          <Link className="btn btn-primary" to ="/">Go To Calenders</Link>
          <a href="#" >
            
          </a>
        </div>

      </div>
}
    </div>
  );
};

