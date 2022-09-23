import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Details = () => {
  const [cartinfo, setcartinfo] = useState({});

  const urlObj = useParams(); //the data present in urlbased on id it displays it reads the data.
  useEffect(() => {
    
    const carts =JSON.parse(localStorage.getItem("carts"))
     const cart=carts.find((std)=>std.id==urlObj.id)//
     console.log(carts)
    setcartinfo(cart)


  
  }, []);
  return (

    <div className="container">
        {Object.keys(cartinfo).length>0&&
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{cartinfo.id}</h5>


          

          <p className="card-text">
          {cartinfo.name}
          </p>
          <p className="card-text">
          {cartinfo.cartname}
          </p>
          <p className="card-text">
          {cartinfo.email}
          </p>
          <p className="card-text">
          {cartinfo.password}
          </p>
          <p className="card-text">
          {cartinfo.message}
          </p>
          <p className="card-text">
          {cartinfo.confirmpassword}
          </p>
          
          <Link className="btn btn-primary" to ="/">Go To Carts</Link>
          <a href="#" >
            
          </a>
        </div>

      </div>
}
    </div>
  );
};

