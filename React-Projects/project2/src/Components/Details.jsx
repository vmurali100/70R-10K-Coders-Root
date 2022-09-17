import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
export const Details = () => {
  const { id } = useParams();
  const [user, setuser] = useState({
    id: "",
    email: "",
    username: "",
    password: "",
    address: {
      streetAddress: "",
      city: "",
      state: "",
      zip: ""
    }
  });

  useEffect(() => {
    getDataFromServer();
  }, []);

  const getDataFromServer = () => {
    axios.get(`http://localhost:4000/nestedusers/${id}`).then((response) => {
      console.log(response);
      setuser(response.data);
    });
  };

  return (
    <div className="container py-4">
        <center>
      <h1 className="display-5">User Id:{id}</h1>
      <hr />

      <ul className="list-group w-50">
        <li className="list-group-item">Email:{user.email}</li>
        <li className="list-group-item">User Name:{user.username}</li>
        <li className="list-group-item">Password:{user.password}</li>
        <li className="list-group-item">Street Address:{user.address.streetAddress}</li>
        <li className="list-group-item">City:{user.address.city}</li>
        <li className="list-group-item">State:{user.address.state}</li>
        <li className="list-group-item">Zip:{user.address.zip}</li>
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
export default Details;
