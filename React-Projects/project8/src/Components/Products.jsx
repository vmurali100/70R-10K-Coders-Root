import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Products = () => {
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
          <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Image</th>
            <th scope="col">Rate</th>
            <th scope="col">Count</th>
            <th scope="col">View</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.price}</td>
                <td>{user.description}</td>
                <td>{user.category}</td>
                <td><img style={{width:100,height:100}} src={user.image}/></td>
                <td>{user.rating.rate}</td>
                <td>{user.rating.count}</td>
              <td>
                <Link to={`ViewProduct/${user.id}`} className="btn btn-primary">
                  View
                </Link>
              </td>
              <td>
                <Link to={`EditProduct/${user.id}`} className="btn btn-warning">
                  Edit
                </Link>
              </td>
              <td>
                <Link to={`DeleteProduct/${user.id}`} className="btn btn-danger">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <li className="btn btn-primary">
        <Link to="/AddProduct" className="nav-link ">
          Add Product
        </Link>
      </li>
    </div>
  );
};
