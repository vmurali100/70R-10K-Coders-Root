/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getallUsers } from "../Store/Slice";

export const Users = () => {
  const userDetails = useSelector((state) => state.user);
  console.log(userDetails.user);
  localStorage.setItem("user", JSON.stringify(userDetails.user));
  // const { id, name, username, email,street,suite, city,zipcode,phone,website,address} = user;

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
            <th scope="col">NAME</th>
            <th scope="col">USERNAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">STREET</th>
            <th scope="col">SUITE</th>
            <th scope="col">CITY</th>
            <th scope="col">ZIPCODE</th>
            <th scope="col">PHONE</th>
            <th scope="col">WEBSITE</th>
            <th scope="col">EDIT</th>
            <th scope="col">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.user.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.street}</td>
              <td>{user.address.suite}</td>
              <td>{user.address.city}</td>
              <td>{user.address.zipcode}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
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
