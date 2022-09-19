import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
export const View = () => {
  const [user, setuser] = useState({
    
    id: "",
    studentname: "",
    subjectname: "",
    description: "",
    username: "",
    teachername: "",
    department: "",
    mobileno: "",
    email: ""
      
  });
  const { id } = useParams();
  useEffect(() => {
    getDataFromServer();
  }, []);

  const getDataFromServer = () => {
    axios.get(`http://localhost:4006/user/${id}`).then((response) => {
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
          <li className="list-group-item">Student Name:{user.studentname}</li>
          <li className="list-group-item">Subject Name:{user.subjectname}</li>
          <li className="list-group-item">Email:{user.email}</li>
          <li className="list-group-item"> User Name:{user.username}</li>
          <li className="list-group-item">Teacher Name:{user.teachername}</li>
          <li className="list-group-item">Description:{user.description}</li>
          <li className="list-group-item">Phone:{user.mobileno}</li>
          <li className="list-group-item">Department:{user.department}</li>
          
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
