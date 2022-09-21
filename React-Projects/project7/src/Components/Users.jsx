import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Users = () => {
  const [user, setuser] = useState([]);

  useEffect(() => {
    let url = "http://localhost:4003/user/";
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
          <th>User Id</th>
            <th>Title</th>

            <th>Body</th>
            
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, i) => (
            <tr key={i}>
           <td>{user.id}</td>
           <td>{user.userId}</td>
              <td>{user.title}</td>

              <td>{user.body}</td>
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
