import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
export const View = () => {
  const [user, setuser] = useState({
    
        id: "",
        name: "",
        username: "",
        email: "",
        address:[ {
          street: "",
          suite: "",
          city: "",
        zipcode: "",
          geo: [{
            lat: "",
            lng: ""
          }],
        }],
        phone: "",
        website: "",
        company:[ {
          name: "",
          catchPhrase: "",
          bs: ""
        }]
      
  });
  const { id } = useParams();
  useEffect(() => {
    getDataFromServer();
  }, []);

  const getDataFromServer = () => {
    axios.get(`http://localhost:4000/user/${id}`).then((response) => {
      console.log(response);
      setuser(response.data);
    });
  };
  return (
    <div className="container py-4">
      <center>
        <h1 className="display-5">User Id:{id}</h1>
        <hr />
        <ul className="list-group w-100">
          <li className="list-group-item">Name:{user.name}</li>
          <li className="list-group-item">User Name:{user.username}</li>
          <li className="list-group-item">Email:{user.email}</li>
          <ul>Adreess Details</ul>
          <li className="list-group-item">Street:{user.address.street}</li>
          <li className="list-group-item">Suite:{user.address.suite}</li>
          <li className="list-group-item">City:{user.address.city}</li>
          <li className="list-group-item">Zipcode:{user.address.zipcode}</li>
          {/* <li className="list-group-item">Latitude:{user.address.geo.lat}</li>
          <li className="list-group-item">Longitude:{user.address.geo.lng}</li> */}
          <li className="list-group-item">Phone:{user.phone}</li>
          <li className="list-group-item">Website:{user.website}</li>
          <ul>Company  Details</ul>
          <li className="list-group-item">Name:{user.company.name}</li>
          <li className="list-group-item">
            CatchPhrase:{user.company.catchPhrase}
          </li>
          <li className="list-group-item">BS:{user.company.bs}</li>
        </ul>
      </center>
      <hr />
      <li className="btn btn-info">
        <Link to="/Home">Back To Home</Link>
      </li>
    </div>
  );
};
export default View;
