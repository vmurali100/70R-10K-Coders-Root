import axios from "axios";
import {useNavigate} from "react-router-dom"
import React, { useState } from "react";
import { useEffect } from "react";
export const Editstudent = () => {
  const [user, setuser] = useState({
    id: "",
    fname: "",
    lname: "",
    dateofbirth: "",
    email: "",
    mobilenumber: "",
  });
  const [users, setusers] = useState([]);
  const navigate = useNavigate()
  let url = "http://localhost:4000/user/";

  useEffect(() => {
    getDataFromServer();
  }, []);

  const getDataFromServer = () => {
    axios.get(url).then((response) => {
      console.log(response);
      setusers(response.data);
    });
  };
  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setuser(newUser);
  };
  const clearForm = () => {
    setuser({
      id: "",
      fname: "",
      lname: "",
      dateofbirth: "",
      email: "",
      mobilenumber: "",
    });
  };
  const handleEdit = (id) => {
    setuser(id);
  };

  const updateUser = () => {
    let url = "http://localhost:4000/user/";
    axios.put(url + user.id, user).then(() => {
      console.log("updated");
      navigate("/Students")
      window.alert("User Updated successfully")
      getDataFromServer();
      clearForm();
     
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const { id, fname, lname, dateofbirth, mobilenumber, email } = user;

  return (
    <div>
      <div className="p-3 mb-2 bg-secondary text-white">
        <h1>Student Registration Form</h1>

        <hr />

        <form onSubmit={onSubmit}>
          <label htmlFor="">ID</label>
          <input
            type="text"
            name="id"
            value={id}
            onChange={(e) => {
              handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">First Name:</label>
          <input
            type="text"
            name="fname"
            value={fname}
            onChange={(e) => {
              handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">Last Name:</label>
          <input
            type="text"
            name="lname"
            value={lname}
            onChange={(e) => {
              handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">Date Of Birth:</label>
          <input
            type="date"
            name="dateofbirth"
            value={dateofbirth}
            onChange={(e) => {
              handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">Mobile Number:</label>
          <input
            type="text"
            name="mobilenumber"
            value={mobilenumber}
            onChange={(e) => {
              handleChange(e);
            }}
          />{" "}
          <br />
          <button
            onClick={updateUser}
            type="button"
            className="btn btn-primary"
          >
            Update User
          </button>
        </form>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date Of Birth</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.dateofbirth}</td>
                <td>{user.email}</td>
                <td>{user.mobilenumber}</td>
                <td>
                  <button
                    className="btn btn-info" type="button"
                    onClick={() => {
                      handleEdit(user);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
