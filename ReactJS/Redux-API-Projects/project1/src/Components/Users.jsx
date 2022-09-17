/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  deleteUsers, getallUsers } from "../Store/Slice";

export const Users = () => {
  const userDetails = useSelector((state) => state.user);
  console.log(userDetails.user);


  const dispatch = useDispatch();
  const handleUser = () => {
    dispatch(getallUsers());
  };
  
  useEffect(() => {
    handleUser()
  }, [])
  
  const handleDelete=(user)=>{
    dispatch(deleteUsers(user))
  }
  return (
    <div>
      <h2>Redux API</h2>
      {/* <button onClick={handleUser} className="btn btn-primary">
        Get Users
      </button> */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">EMAIL</th>
            <th scope="col">USERNAME</th>
            <th scope="col">PASSWORD</th>
            <th scope="col">EDIT</th>
            <th scope="col">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.user.map((user,i)=> <tr key={i} >
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td> <button className="btn btn-warning">Edit</button> </td>
            <td> <button className="btn btn-danger" onClick={()=>{handleDelete(user)}}>Delete</button> </td>
          </tr> )}
        </tbody>
      </table>
    </div>
  );
};
