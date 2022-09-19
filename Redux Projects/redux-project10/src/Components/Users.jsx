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
          <th>Registration Number</th>
            <th>University</th>
            <th>Institute</th>
            <th>Branch</th>
            <th>Degree</th>
            <th>Average CGPA</th>
            <th>Experience</th>
            <th>Blog/Website</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {usersDetails.users.map((user, i) => (
            <tr key={i}>
               <td>{user.regno}</td>
              <td>{user.university}</td>
              <td>{user.institute}</td>
              <td>{user.branch}</td>

              <td>{user.degree}</td>
              <td>{user.avgcgpa}</td>
              <td>{user.experience}</td>
              <td>{user.blog}</td>
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
