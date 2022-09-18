import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Details = () => {
  const [datauserinfo, setdatauserinfo] = useState({});

  const urlObj = useParams(); //the data present in urlbased on id it displays it reads the data.
  useEffect(() => {
    
    const datausers =JSON.parse(localStorage.getItem("datausers"))
     const datauser=datausers.find((std)=>std.id==urlObj.id)//
     console.log(datausers)
    setdatauserinfo(datauser)


  
  }, []);
  return (

    <div className="container">
        {Object.keys(datauserinfo).length>0&&
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{datauserinfo.id}</h5>


          

          <p className="card-text">
          {datauserinfo.userId}
          </p>
          <p className="card-text">
          {datauserinfo.title}
          </p>
          
          
          <Link className="btn btn-primary" to ="/">Go To Datausers</Link>
          <a href="a" >
            
          </a>
        </div>

      </div>
}
    </div>
  );
};

