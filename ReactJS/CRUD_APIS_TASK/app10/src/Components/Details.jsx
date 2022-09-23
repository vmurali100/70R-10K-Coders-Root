import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Details = () => {
  const [product, setproduct] = useState({});

  const urlObj = useParams(); //the data present in urlbased on id it displays it reads the data.
  useEffect(() => {
    
    
    const products =JSON.parse(localStorage.getItem("Products"))
     const product=products.find((std)=>std.id==urlObj.id)//
     console.log(products)
    setproduct(product)


  
  }, []);
  return (

    <div className="container">
        {Object.keys(product).length>0&&
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{product.id}</h5>
           

          <p className="card-text">
          {product.title}
          </p>
          <p className="card-text">
          {product.price}
          </p>
          <p className="card-text">
          {product.description}
          </p>
          <p className="card-text">
          {product.category}
          </p>
          


          
          
          <Link className="btn btn-primary" to ="/">Go To Products</Link>
          <a href="a" >
            
          </a>
        </div>

      </div>
}
    </div>
  );
};

