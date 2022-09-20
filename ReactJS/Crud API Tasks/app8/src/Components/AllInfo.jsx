import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const AllInfo = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    let url = "http://localhost:3008/FetchData/";
    axios.get(url).then((response) => {
      localStorage.setItem("DataInfo", JSON.stringify(response.data));
      setdata(response.data);
    });
  }, []);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>StreetAddress</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, i) => (
            <tr key={i}>
              <td>{data.id}</td>
              <td>{data.email}</td>
              <td>{data.username}</td>
              <td>{data.password}</td>
              <td>{data.streetAddress}</td>
              <td>{data.city}</td>
              <td>{data.state}</td>
              <td>{data.zip}</td>

              <td>
                <Link to={`details/${data.id}`} className=" btn btn-primary">
                  Details
                </Link>
              </td>
              <td>
                <Link to={`edit/${data.id}`} className=" btn btn-warning">
                  Edit
                </Link>
              </td>

              <td>
                <Link to={`delete/${data.id}`} className=" btn btn-danger">
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
