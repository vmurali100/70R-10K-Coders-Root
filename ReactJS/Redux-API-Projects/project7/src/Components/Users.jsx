/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getallUsers } from "../Store/Slice";

export const Users = () => {
  const userDetails = useSelector((state) => state.user);
  console.log(userDetails.user);
  localStorage.setItem("user", JSON.stringify(userDetails.user));

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleUser = () => {
    dispatch(getallUsers());
  };

  useEffect(() => {
    handleUser();
  }, []);

  const handleDelete = (user) => {
    navigate(`delete/${user.id}`);
  };

  const handleEdit = (user) => {
    navigate(`edit/${user.id}`);
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">AlbumId</th>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Url</th>
            <th scope="col">ThumbnailUrl</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>

            </tr>
        </thead>
        <tbody>
          {userDetails.user.map((user, i) => (
            <tr key={i}>
              <td>{user.albumId}</td>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.url}</td>
              <td>{user.thumbnailUrl}</td>
              <td>
                {" "}
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    handleEdit(user);
                  }}
                >
                  Edit
                </button>{" "}
              </td>
              <td>
                {" "}
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(user);
                  }}
                >
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
