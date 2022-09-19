import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Info = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let url = "http://localhost:3000/filltext1/";
    axios.get(url).then((res) => {
      console.log(res.data);
      localStorage.setItem("Users", JSON.stringify(res.data));
      setUser(res.data);
    });
  }, []);

  const addUsers = () => {
    navigate("/create");
  };
  return (
    <div className="container">
      <button className="btn btn-primary" type="button" onClick={addUsers}>
        Add Users
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Fname</th>
            <th>Lname</th>
            <th>Tel</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.tel}</td>
              <td>{user.address}</td>
              <td>{user.city}</td>
              <td>{user.state}</td>
              <td>{user.zip}</td>

              {/* <td><button type="button" className="btn btn-primary">Details</button></td>  */}
              <td>
                <Link
                  to={`edit/${user.id}`}
                  className=" btn btn-warning"
                >
                  Edit
                </Link>
              </td>
              <td>
                <Link
                  to={`delete/${user.id}`}
                  className=" btn btn-danger"
                >
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
