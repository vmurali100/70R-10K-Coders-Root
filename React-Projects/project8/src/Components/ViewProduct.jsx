import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
export const ViewProduct = () => {
  const { id } = useParams();
  const [user, setuser] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",

    rating: [
      {
        rate: "",
        count: "",
      },
    ],
  });

  useEffect(() => {
    getDataFromServer();
  }, []);

  const getDataFromServer = () => {
    axios.get(`http://localhost:4000/user/${id}`).then((response) => {
      console.log(response);
      setuser(response.data);
    });
  };

  return (
    <div className="container py-4">
        <center>
      <h1 className="display-5">Product Id:{id}</h1>
      <hr />

      <ul className="list-group w-50">
        <li className="list-group-item">Title:{user.title}</li>
        <li className="list-group-item">Price:{user.price}</li>
        <li className="list-group-item">Description:{user.description}</li>
        <li className="list-group-item">Category:{user.category}</li>
        <li className="list-group-item">Image:<img style={{width:100,height:100}} src={user.image}/></li>
        <li className="list-group-item">Rate:{user.rating.rate}</li>
        <li className="list-group-item">Count:{user.rating.count}</li>

      </ul>
      </center>
      <hr/>
      <li className="btn btn-info">
        <Link to="/" >
        Back To Home
        </Link></li>
    </div>
  );
};
export default ViewProduct;
