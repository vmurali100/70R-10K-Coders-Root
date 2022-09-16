import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Students = () => {
  const [user, setuser] = useState([]);

  useEffect(() => {
    let url = "http://localhost:4000/user/";
    axios.get(url).then((res) => {
      console.log(res.data);
      setuser(res.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="container"></div>
      <table className="table">
        <thead>
          <tr>
            <th>Registration Number</th>
            <th>University</th>
            <th>Institute</th>
            <th>Branch</th>
            <th>Degree</th>
            <th>Average CGPA</th>
            <th>Experience</th>
            <th>Blog/Website</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, i) => (
            <tr key={i}>
              <td>{user.regno}</td>
              <td>{user.university}</td>
              <td>{user.institute}</td>
              <td>{user.branch}</td>

              <td>{user.degree}</td>
              <td>{user.avgcgpa}</td>
              <td>{user.experience}</td>
              <td>{user.blog}</td>

              <td>
                <Link to={`View/${user.id}`} className="btn btn-primary">
                  View
                </Link>
              </td>
              <td>
                <Link to={`EditUser/${user.id}`} className="btn btn-warning">
                  Edit
                </Link>
              </td>
              <td>
                <Link to={`DeleteUser/${user.id}`} className="btn btn-danger">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <li className="btn btn-primary">
        <Link to="/AddUser" className="nav-link ">
          Add User
        </Link>
      </li>
    </div>
  );
};
