/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export const Edit = () => {
  let url = "http://localhost:3009/products/";
  const navigate = useNavigate();
  const UrlEdit = useParams();

  const data = JSON.parse(localStorage.getItem("ProdcutInfo"));
  const response = data.find((products) => products.id == UrlEdit.id);
  const [products, setusers] = useState(response);

  const {
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
    rate,
    count,
  } = products;
  const handleChange = (e) => {
    let newproducts = { ...products };
    newproducts[e.target.name] = e.target.value;
    setusers(newproducts);
  };

  const updateData = () => {
    axios.put(url + UrlEdit.id, products).then(() => {
      navigate("/");
    });
  };
  return (
    <div
      className="container"
      style={{ textAlign: "center", marginTop: "20px" }}
    >
      <form>
        <div className="mb-3">
          <label className="form-label">Id</label>
          <input
            type="text"
            className="form-control"
            name="id"
            value={id}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={title}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={price}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={description}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={category}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={image}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Rate</label>
          <input
            type="text"
            className="form-control"
            name="rate"
            value={rating.rate}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Count</label>
          <input
            type="text"
            className="form-control"
            name="count"
            value={rating.count}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={updateData}>
          Update
        </button>
        <div className="mb-3">
          <Link
            to="/"
            className="btn btn-primary"
            style={{ marginTop: "20px" }}
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};
