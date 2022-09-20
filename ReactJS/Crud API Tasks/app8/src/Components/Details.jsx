/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const Details = () => {
  const [userDetails, setuserDetails] = useState({});

  const urlDetails = useParams();
  const { id, email, username, password, streetAddress, city, state, zip } =
  userDetails;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("DataInfo"));
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
              <b>Email</b> :{email}
            </p>
            <p className="card-text">
              <b>Username</b> : {username}
            </p>
            <p className="card-text">
              <b>Password</b> : {password}
            </p>
            <p className="card-text">
              <b>Steet</b> : {streetAddress}
            </p>
            <p className="card-text">
              <b>City</b> : {city}
            </p>
            <p className="card-text">
              <b>State</b> : {state}
            </p>

            <p className="card-text">
              <b>Zip</b> : {zip}
            </p>
            <Link
              to="/"
              className="btn btn-primary"
              style={{ marginTop: "20px" }}
            >
              Go back to UserInfo
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
