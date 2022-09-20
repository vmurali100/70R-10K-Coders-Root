import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const AllInfo = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    let url = "http://localhost:3009/products/";
    axios.get(url).then((response) => {
      localStorage.setItem("ProdcutInfo", JSON.stringify(response.data));
      setproducts(response.data);
    });
  }, []);

  return (
    <div className="App">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rate</th>
            <th>Count</th>
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((products, i) => (
            <tr key={i}>
              <td>{products.id}</td>
              <td>{products.title}</td>
              <td>{products.price}</td>
              <td>{products.description}</td>
              <td>{products.category}</td>
              <td>{products.image}</td>
              <td>{products.rating.rate}</td>
              <td>{products.rating.count}</td>

              <td>
                <Link
                  to={`details/${products.id}`}
                  className=" btn btn-primary"
                >
                  Details
                </Link>
              </td>
              <td>
                <Link to={`edit/${products.id}`} className=" btn btn-warning">
                  Edit
                </Link>
              </td>

              <td>
                <Link to={`delete/${products.id}`} className=" btn btn-danger">
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
