import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
export const Details = () => {
  const { id } = useParams();
  const [user, setuser] = useState({
    id:"",
        username: "",
        password: "",
        emailaddress: "",
        gender: "",
        dateofbirth: "",
        height: "",
        weight: ""
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
      <h1 className="display-5">User Id:{id}</h1>
      <hr />

      <ul className="list-group w-50">
        <li className="list-group-item">User Name:{user.username}</li>
        <li className="list-group-item">Password:{user.password}</li>
        <li className="list-group-item">Email Address:{user.emailaddress}</li>
        
        <li className="list-group-item">Gender:{user.gender}</li>
        <li className="list-group-item">Date of birth:{user.dateofbirth}</li>
        <li className="list-group-item">Height:{user.height}</li>
        <li className="list-group-item">Weight:{user.weight}</li>
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
