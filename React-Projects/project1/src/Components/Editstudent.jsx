import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
export const Editstudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setuser] = useState({
    id: "",
    fname: "",
    lname: "",
    dateofbirth: "",
    email: "",
    mobilenumber: "",
  });

  useEffect(() => {
    getDataFromServer();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/user/${id}`, user);
    navigate("/Students");
  };

  const getDataFromServer = () => {
    axios.get(`http://localhost:4000/user/${id}`).then((response) => {
      console.log(response);
      setuser(response.data);
    });
  };
  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setuser(newUser);
  };

  const updateUser = () => {
    let url = "http://localhost:4000/user/";
    axios.put(url + user.id, user).then(() => {
      console.log("updated");
      navigate("/Students");
      alert("User Updated successfully");
      getDataFromServer();
      clearForm();
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

  const { fname, lname, dateofbirth, mobilenumber, email } = user;

  return (
    <div>
      <p>Click On The User You Want to Edit/Update</p>

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
      </div>
    </div>
  );
};
