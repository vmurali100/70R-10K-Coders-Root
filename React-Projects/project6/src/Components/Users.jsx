import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Users = () => {
  const [user, setuser] = useState([]);

  useEffect(() => {
    let url = "http://localhost:4005/user/";
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Name</th>

            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>City</th>
            <th>Street</th>
            <th>St Number</th>
            <th>Zipcode</th>
            
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, i) => (
            <tr key={i}>
           <td>{user.id}</td>
              <td>{user.name.firstname}</td>
              <td>{user.name.lastname}</td>
              <td>{user.username}</td>

              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.password}</td>
              <td>{user.address.city}</td>
              <td>{user.address.street}</td>
              <td>{user.address.number}</td>
              <td>{user.address.zipcode}</td>
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
