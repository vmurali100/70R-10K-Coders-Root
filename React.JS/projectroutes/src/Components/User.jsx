import React from "react";
import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const User = () => {
  const [UserDetails, setUserDetails] = useState([]);

  let url = " http://localhost:3001/users1"

  useEffect(()=>{
    axios.get(url).then((response)=>{
      localStorage.setItem("users",JSON.stringify(response.data));
      setUserDetails(response.data)
    })
  },[])


  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {UserDetails.map((user,i)=>{
             return <tr key={i}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/EditUser/${user.id}`} className="btn btn-warning" >Edit</Link>
              </td>
              <td>
                <Link to={`/DeleteUser/${user.id}`} className="btn btn-danger" >Delete</Link>
              </td>
              <td>
                <Link to={`/UserDetails/${user.id}`} className="btn btn-primary">Details</Link>
              </td>
             </tr>
          })}
        </tbody>
      </table>
    </div>
  );
};
