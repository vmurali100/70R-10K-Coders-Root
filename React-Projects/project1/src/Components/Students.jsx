import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Students = () => {
  const [studets, setstudets] = useState([]);
  useEffect(() => {
    let url = "http://localhost:3000/user";
    axios.get(url).then((res) => {
      console.log(res.data);
      setstudets(res.data);
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
            <th>Date Of Birth</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {studets.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.dateofbirth}</td>
              <td>{user.mobilenumber}</td>

              <td>{user.email}</td>
              <td>
                <Link to="/Delete" className="btn btn-danger">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <li className="btn btn-primary">
        <Link to="/Addstudent" className="nav-link ">
          Add student
        </Link>
      </li>

      <li className="btn btn-info">
        <Link to="/Editstudent" className="nav-link " type="button">
        
          Edit student
        </Link>
      </li>
    </div>
  );
};
{/* <Link to={`/${user.id}`} className="btn btn-danger">Delete</Link> */}