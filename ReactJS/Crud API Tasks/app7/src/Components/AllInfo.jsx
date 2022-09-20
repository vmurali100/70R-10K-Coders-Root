import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const AllInfo = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    let url = "http://localhost:3007/users/";
    axios.get(url).then((response) => {
      localStorage.setItem("UserInfo", JSON.stringify(response.data));
      setusers(response.data);
    });
  }, []);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            {/* <th>Street</th>
            <th>suite</th>
            <th>city</th>
            <th>zipcode</th>
            <th>Geo Lat</th>
            <th>Geo Lng</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company Name</th>
            <th>Compnay Catchphrase</th>
            <th>Company Bs</th> */}
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users, i) => (
            <tr key={i}>
              <td>{users.id}</td>
              <td>{users.name}</td>
              <td>{users.username}</td>
              <td>{users.email}</td>
              {/* <td>{users.address.street}</td>
              <td>{users.address.suite}</td>
              <td>{users.address.city}</td>
              <td>{users.address.zipcode}</td>
              <td>{users.address.geo.lat}</td>
              <td>{users.address.geo.lng}</td>
              <td>{users.phone}</td>
              <td>{users.website}</td>
              <td>{users.company.name}</td>
              <td>{users.company.catchPhrase}</td>
              <td>{users.company.bs}</td> */}
              <td>
                <Link to={`details/${users.id}`} className=" btn btn-primary">
                  Details
                </Link>
              </td>
              <td>
                <Link to={`edit/${users.id}`} className=" btn btn-warning">
                  Edit
                </Link>
              </td>

              <td>
                <Link to={`delete/${users.id}`} className=" btn btn-danger">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
