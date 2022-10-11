/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getProducts } from "../Store/ProductSlice";

export const Products = () => {
  const productDetails = useSelector((state) => state.products);
  console.log(productDetails.products);
  localStorage.setItem("user",JSON.stringify(productDetails.user))

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getAllProducts = () => {
    dispatch(getProducts());
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  const handleDelete = (user) => {
    navigate(`delete/${user.id}`);
  };

  const handleEdit = (user) => {
    navigate(`edit/${user.id}`);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">TITLE</th>
            <th scope="col">PRICE</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">CATEGORY</th>
            <th scope="col">EDIT</th>
            <th scope="col">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {productDetails.products.map((products, i) => (
            <tr key={i}>
              <td>{products.id}</td>
              <td>{products.title}</td>
              <td>{products.price}</td>
              <td>{products.description}</td>
              <td>{products.category}</td>
              <td>
                {" "}
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    handleEdit(products);
                  }}
                >
                  Edit
                </button>{" "}
              </td>
              <td>
                {" "}
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(products);
                  }}
                >
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
