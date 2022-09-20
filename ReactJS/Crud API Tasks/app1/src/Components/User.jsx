import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const User = () => {
  const [users, setusers] = useState([]);
  // const navigate = useNavigate()
  useEffect(() => {
    let url = " http://localhost:3000/users";
    axios.get(url).then((res) => {
      console.log(res.data);
      localStorage.setItem("Students", JSON.stringify(res.data));
      setusers(res.data);
    });
  }, []);

  // const addUsers=()=>{
  //   navigate("/createuser")
  // }
  return (
    <div className="container">
      {/* <button className="btn btn-primary" type="button" onClick={addUsers}>Add User</button> */}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users, i) => (
            <tr key={i}>
              <td>{users.id}</td>
              <td>{users.email}</td>
              <td>{users.username}</td>
              <td>{users.password}</td>
              <td>
                <Link to={`edituser/${users.id}`} className=" btn btn-warning">
                  Edit
                </Link>
              </td>
              <td>
                <Link to={`deleteuser/${users.id}`} className=" btn btn-danger">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
