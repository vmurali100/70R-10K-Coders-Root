import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Subscribers = () => {
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
            <th>ID</th>
            <th>User Name</th>
            <th>Password</th>
            <th>Email Address</th>
            <th>Gender</th>
            <th>Date Of Birth</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, i) => (
            <tr key={i}>
                  <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.emailaddress}</td>
              <td>{user.gender}</td>

              <td>{user.dateofbirth}</td>
              <td>{user.height}</td>
              <td>{user.weight}</td>
              <td>
                <Link to={`Details/${user.id}`} className="btn btn-primary">
                  Details
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
