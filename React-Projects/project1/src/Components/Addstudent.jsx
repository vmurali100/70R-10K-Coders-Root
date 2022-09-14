import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export const Addstudent = () => {
  const [user, setuser] = useState({
    id: "",
    fname: "",
    lname: "",
    dateofbirth: "",
    email: "",
    mobilenumber: "",
  });
  const [users, setusers] = useState([]);
  let url = "http://localhost:4000/user";
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
  const addUser = () => {
    let url = "http://localhost:4000/user";
    axios.post(url, user).then(() => {
      console.log("user added successfully");
      clearForm();
      getDataFromServer();
    });
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

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const { id, fname, lname, dateofbirth, mobilenumber, email } = user;
  return (
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
          onClick={addUser}
          type="button"
          style={{ color: "yellow", background: "black" }}
        >
          Add Student
        </button>
      </form>
    </div>
  );
};
