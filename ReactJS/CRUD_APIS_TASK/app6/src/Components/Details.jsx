import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Details = () => {
  const [user, setuser] = useState({});

  const urlObj = useParams(); //the data present in urlbased on id it displays it reads the data.
  useEffect(() => {
    
    
    const users =JSON.parse(localStorage.getItem("Users"))
     const user=users.find((std)=>std.id==urlObj.id)//
     console.log(users)
    setuser(user)


  
  }, []);
  return (

    <div className="container">
        {Object.keys(user).length>0&&
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{user.id}</h5>


          

          <p className="card-text">
          {user.fname}
          </p>
          <p className="card-text">
          {user.lname}
          </p>
          <p className="card-text">
          {user.tel}
          </p>
          <p className="card-text">
          {user.address}
          </p>
          <p className="card-text">
          {user.city}
          </p>
          <p className="card-text">
          {user.state}
          </p>
          <p className="card-text">
          {user.zip}
          </p>
          
          
          <Link className="btn btn-primary" to ="/">Go To Users</Link>
          <a href="a" >
            
          </a>
        </div>

      </div>
}
    </div>
  );
};

