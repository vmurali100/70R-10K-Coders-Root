import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
export const Details = () => {
  const { id } = useParams();
  const [user, setuser] = useState({
    id: "",
    fname: "",
    lname: "",
    dateofbirth: "",
    email: "",
    mobilenumber: "",
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
        <li className="list-group-item">First Name:{user.fname}</li>
        <li className="list-group-item">Last Name:{user.lname}</li>
        <li className="list-group-item">Date of birth:{user.dateofbirth}</li>
        <li className="list-group-item">Email:{user.email}</li>
        <li className="list-group-item">Mobile Number:{user.mobilenumber}</li>
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
