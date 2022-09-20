import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

export const Delete = () => {
  let url = "http://localhost:3203/filltext1/";
  const urlObj = useParams();
  const navigate = useNavigate();
  const handleDelete = () => {
    axios.delete(url + urlObj.id).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <p>Are you sure..you want to delete?</p>
      <button type="button" onClick={handleDelete} className="btn btn-danger">
        Delete
      </button>
      <Link to="/" className="btn btn-primary" style={{ marginLeft: "10px" }}>
        Cancel
      </Link>
    </div>
  );
};
