/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const Details = () => {
  const [userDetails, setuserDetails] = useState({});

  const urlDetails = useParams();
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
  } = userDetails;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("ProdcutInfo"));
    const response = user.find((response) => response.id == urlDetails.id);
    setuserDetails(response);
  }, []);

  return (
    <div className="container" style={{ textAlign: "center" }}>
      {Object.keys(userDetails).length > 0 && (
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              <b>Id</b> : {id}
            </p>
            <p className="card-text">
              <b>Title</b> :{title}
            </p>
            <p className="card-text">
              <b>Price</b> : {price}
            </p>
            <p className="card-text">
              <b>Description</b> : {description}
            </p>
            <p className="card-text">
              <b>Category</b> : {category}
            </p>
            <p className="card-text">
              <b>Image</b> : {image}
            </p>
            <p className="card-text">
              <b>Rate</b> : {rating.rate}
            </p>

            <p className="card-text">
              <b>Count</b> : {rating.count}
            </p>
            <Link
              to="/"
              className="btn btn-primary"
              style={{ marginTop: "20px" }}
            >
              Go back to ProductsInfo
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
