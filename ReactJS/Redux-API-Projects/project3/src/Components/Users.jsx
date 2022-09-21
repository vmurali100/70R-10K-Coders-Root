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
            <th scope="col">ID</th>
            <th scope="col">FNAME</th>
            <th scope="col">LNAME</th>
            <th scope="col">TEL</th>
            <th scope="col">ADDRESS</th>
            <th scope="col">CITY</th>
            <th scope="col">STATE</th>
            <th scope="col">ZIP</th>
            <th scope="col">EDIT</th>
            <th scope="col">DELETE</th>

            
          </tr>
        </thead>
        <tbody>
          {userDetails.user.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.tel}</td>
              <td>{user.address}</td>
              <td>{user.city}</td>
              <td>{user.state}</td>
              <td>{user.zip}</td>
              
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
