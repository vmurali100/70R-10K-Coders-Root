import axios from "axios";
import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export const Delete = () => {
  let url = "http://localhost:3004/albums/";

  const urlDel = useParams();

  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(url + urlDel.id).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="container" style={{marginTop:"20px"}}>
      <p>Are you sure..you want to delete?</p>
      <button type="button" onClick={handleDelete} className="btn btn-danger">
        Delete
      </button>
      <Link to="/" className="btn btn-primary" style={{ marginLeft: "20px" }}>
        Cancel
      </Link>
    </div>
  );
};
