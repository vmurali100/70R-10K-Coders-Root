import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
export const View = () => {
  const [user, setuser] = useState({
    id: "",
    userId: "",
    date: "",
    products: [
      {
        productId: "",
        quantity: ""
      }
    ],
    __v: ""
  });
  const { id } = useParams();
  useEffect(() => {
    getDataFromServer();
  }, []);

  const getDataFromServer = () => {
    axios.get(`http://localhost:4001/user/${id}`).then((response) => {
      console.log(response);
      setuser(response.data);
    });
  };
  return (
    <div className="container py-4">
      <center>
        <h1 className="display-5">Id:{id}</h1>
        <hr />
        <ul className="list-group w-100">
          <li className="list-group-item">User ID:{user.userId}</li>
          
          <li className="list-group-item">Date:{user.date}</li>
          <ul>Products</ul>
          <li className="list-group-item">ProductId :{user.products.productId}</li>
          <li className="list-group-item">Quantity :{user.products.quantity}</li>
          
         
          <li className="list-group-item">Version:{user.__v}</li>
          
        </ul>
      </center>
      <hr />
      <li className="btn btn-info">
        <Link to="/Home">Back To Home</Link>
      </li>
    </div>
  );
};
export default View;
