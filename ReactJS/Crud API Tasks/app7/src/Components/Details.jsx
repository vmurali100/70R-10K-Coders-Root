/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const Details = () => {
  const [userDetails, setuserDetails] = useState({});

  const urlDetails = useParams();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("UserInfo"));
    const user = data.find((user) => user.id == urlDetails.id);
    setuserDetails(user);
  }, []);

  return (
    <div className="container" style={{textAlign:"center"}}>
      {Object.keys(userDetails).length > 0 && (
        <div className="card">
          <div className="card-body">
            <p>
              <b>Address :-</b>
            </p>

            <p className="card-text">
              <b>Steet</b> : {userDetails.address.street}
            </p>

            <p className="card-text">
              <b>Suite</b> : {userDetails.address.suite}
            </p>

            <p className="card-text">
              <b>Zipcode</b> : {userDetails.address.zipcode}
            </p>
            <p>
              <b>Company Details :-</b>
            </p>
            <p className="card-text">
              <b>Company Name</b> : {userDetails.company.name}
            </p>
            <p className="card-text">
              <b>Catchphrase</b> :- {userDetails.company.catchPhrase}
            </p>
            <p className="card-text">
              <b>Bs</b> : {userDetails.company.bs}
            </p>

            <p className="card-text">
              <b>Email</b> :{userDetails.email}
            </p>
            <p className="card-text">
              <b>Id</b> : {userDetails.id}
            </p>
            <p className="card-text">
              <b>Name</b> : {userDetails.name}
            </p>
            <p className="card-text">
              <b>Phone</b> : {userDetails.phone}
            </p>
            <p className="card-text">
              <b>Username</b> : {userDetails.username}
            </p>

            <p className="card-text">
              <b>Website</b> : {userDetails.website}
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
