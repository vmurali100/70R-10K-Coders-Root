import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Details = () => {
  const [userinfo, setuserinfo] = useState({});

  const urlObj = useParams(); //the data present in urlbased on id it displays it reads the data.
  useEffect(() => {
    
    const users =JSON.parse(localStorage.getItem("users"))
     const user=users.find((std)=>std.id==urlObj.id)//
     console.log(users)
    setuserinfo(user)


  
  }, []);
  return (

    <div className="container">
        {Object.keys(userinfo).length>0&&
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{userinfo.id}</h5>


          

          <p className="card-text">
          {userinfo.title}
          </p>
          <p className="card-text">
          {userinfo.body}
          </p>
          
          <Link className="btn btn-primary" to ="/">Go To Users</Link>
          <a href="#" >
            
          </a>
        </div>

      </div>
}
    </div>
  );
};

