import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
export const View = () => {
  const [user, setuser] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
   
      
  });
  const { id } = useParams();
  useEffect(() => {
    getDataFromServer();
  }, []);

  const getDataFromServer = () => {
    axios.get(`http://localhost:4003/user/${id}`).then((response) => {
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
          <li className="list-group-item">Title:{user.title}</li>
          <li className="list-group-item">Body:{user.body}</li>
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
