import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteUsersAction } from "../Store/Slice";

export const Delete = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useParams()

  const handleDelete = () => {
     dispatch(deleteUsersAction(user));
     navigate("/");
  };
  const handleCancel = () => {
    navigate("/");
  };
  return (
    <div
      className="container"
      style={{ textAlign: "center", marginTop: "35px" }}
    >
      <p style={{ color: "red" }}>
        Are You Sure... You Want To Delete The User ?
      </p>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete User
      </button>
      <button
        className="btn btn-primary"
        style={{ marginLeft: "20px" }}
        onClick={handleCancel}
      >
        Cancel
      </button>
    </div>
  );
};
