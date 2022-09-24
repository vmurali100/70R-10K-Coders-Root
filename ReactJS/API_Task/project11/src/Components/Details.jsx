import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Details = () => {
  const [photo, setphoto] = useState({});

  const urlObj = useParams(); //the data present in urlbased on id it displays it reads the data.
  useEffect(() => {
    
    
    const albums =JSON.parse(localStorage.getItem("users"))
     const photo=albums.find((std)=>std.id==urlObj.id)//
     console.log(albums)
    setphoto(photo)


  
  }, []);
  return (

    <div className="container">
        {Object.keys(photo).length>0&&
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{photo.id}</h5>
           

          <p className="card-text">
          {photo.title}
          </p>
          <p className="card-text">
          {photo.userId}
          </p>
          
          <Link className="btn btn-primary" to ="/">Go To albums</Link>
          <a href="a" >
            
          </a>
        </div>

      </div>
}
    </div>
  );
};
