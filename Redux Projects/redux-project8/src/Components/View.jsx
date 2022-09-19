import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
export const View = () => {
  const [user, setuser] = useState({
    
    id:"",
    profile: "",
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: "",
  });
  const { id } = useParams();
  useEffect(() => {
    getDataFromServer();
  }, []);

  const getDataFromServer = () => {
    axios.get(`http://localhost:4007/user/${id}`).then((response) => {
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
        <li className="list-group-item">Profile:<img style={{width:100,height:100}} src={user.profile}/></li>
        <li className="list-group-item">Name:{user.name}</li>
        <li className="list-group-item">User Name:{user.username}</li>
        <li className="list-group-item">Email:{user.email}</li>
        <li className="list-group-item">Password:{user.password}</li>
        <li className="list-group-item">Confirm Password:{user.confirmpassword}</li>
        <li className="list-group-item">Message:{user.message}</li>
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
