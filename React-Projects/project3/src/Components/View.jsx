import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
export const View = () => {
  const { id } = useParams();
  const [user, setuser] = useState({
    regno: "",
    university: "",
    institute: "",
    branch: "",
    degree: "",
    avgcgpa: "",
    experience: "",
    blog: "",
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
          <li className="list-group-item">Registration Number:{user.regno}</li>
          <li className="list-group-item">University:{user.university}</li>
          <li className="list-group-item">Institute:{user.institute}</li>
          <li className="list-group-item">Branch:{user.branch}</li>
          <li className="list-group-item">Degree:{user.degree}</li>
          <li className="list-group-item">Average CGPA:{user.avgcgpa}</li>
          <li className="list-group-item">Experience:{user.experience}</li>
          <li className="list-group-item">Website/Blog:{user.blog}</li>
        </ul>
      </center>
      <hr />
      <li className="btn btn-info">
        <Link to="/">Back To Home Page</Link>
      </li>
    </div>
  );
};
export default View;
