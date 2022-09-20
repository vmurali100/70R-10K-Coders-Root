import axios from "axios";
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export const DeleteUser = () => {
  const urlObj = useParams();
  const navigate = useNavigate();
  let url = "http://localhost:3000/users/";
  const deleteUser = () => {
    axios.delete(url + urlObj.id).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="container">
      <p>Are You Sure ... You Want To Delete ?</p>
      <button onClick={deleteUser} className="btn btn-danger">
        Delete User
      </button>
      <Link to="/" className="btn btn-primary" style={{ marginLeft: "20px" }}>
        Cancel
      </Link>
    </div>
  );
};
