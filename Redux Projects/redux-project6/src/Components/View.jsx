import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
export const View = () => {
  const [user, setuser] = useState( {
    address:{geolocation:
    {lat:"",
    long:""},
  city:"",street:" ",
  number:"",zipcode:""},
  id:"",
  email:"",
  username:"",
  password:"",
  name:{firstname:"",lastname:""},
  phone:"",__v:""
});
  const { id } = useParams();
  useEffect(() => {
    getDataFromServer();
  }, []);

  const getDataFromServer = () => {
    axios.get(`http://localhost:4005/user/${id}`).then((response) => {
      console.log(response);
      setuser(response.data);
    });
  };
  return (
    <div className="container py-4">
      <center>
        <h1 className="display-5">User Id:{id}</h1>
        <hr />
        <ul className="list-group w-100">
          <li className="list-group-item">First Name:{user.name.firstname}</li>
          <li className="list-group-item">Last Name:{user.name.lastname}</li>
          <li className="list-group-item">User Name:{user.username}</li>
          <li className="list-group-item">Email:{user.email}</li>
          <ul>Adreess Details</ul>
          <li className="list-group-item">Street:{user.address.street}</li>
          <li className="list-group-item">Suite:{user.address.number}</li>
          <li className="list-group-item">City:{user.address.city}</li>
          <li className="list-group-item">Zipcode:{user.address.zipcode}</li>
          <li className="list-group-item">Latitude:{user.address.geolocation.lat}</li>
          <li className="list-group-item">Longitude:{user.address.geolocation.long}</li>
          <li className="list-group-item">Phone:{user.phone}</li>
          <li className="list-group-item">Password:{user.password}</li>
        
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
