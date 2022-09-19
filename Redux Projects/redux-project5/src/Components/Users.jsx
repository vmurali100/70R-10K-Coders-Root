import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../store/usersSlice";
import { Link } from "react-router-dom";

export const Users = () => {
  const usersDetails = useSelector((state) => state.users);
  localStorage.setItem('users',JSON.stringify(usersDetails.users))
  console.log(usersDetails.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getusers = () => {
    dispatch(getAllUsers());
  };
  useEffect(() => {
    getusers();
  },[]);
  const handleDelete = (user) => {
    navigate(`delete/${user.id}`);
    // dispatch(deleteUser(user))
  };
  const handleEdit=(user)=>{
    navigate(`edit/${user.id}`);
  }
  return (
    <div>
      <button onClick={getusers} className="btn btn-primary">
        Get User
      </button>
      <table className="table">
        <thead>
          <tr>
          <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Image</th>
            <th scope="col">Rate</th>
            <th scope="col">Count</th>
            <th scope="col">View</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {usersDetails.users.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.price}</td>
                <td>{user.description}</td>
                <td>{user.category}</td>
                <td><img style={{width:100,height:100}} src={user.image}/></td>
                <td>{user.rating.rate}</td>
                <td>{user.rating.count}</td>
              <td>
                <Link to={`View/${user.id}`} className="btn btn-primary">View</Link>
              </td>
              <td>
                <button  onClick={() => {
                    handleEdit(user);
                  }} className="btn btn-warning">Edit</button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(user);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
