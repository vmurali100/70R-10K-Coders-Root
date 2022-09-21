import React from "react";

import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
export const DeleteUser = () => {
  const urlObj = useParams();
  const navigate = useNavigate();
  let url = "http://localhost:4000/user/";
  const handleDelete = () => {
    axios.delete(url + urlObj.id).then(() => {
      console.log("user deleted");
      alert("user deleted")
      navigate("/Users");
    });
  };

  return (
    <div className="container">
      <p>Are You Sure You Want to Delete?</p>
      <button onClick={handleDelete}> Delete</button>
    </div>
  );
};
