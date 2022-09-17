import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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

      alert("User Added successfully");

      clearForm();
      navigate("/Students");
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
      <div className="w-75 mx-auto shadow p-5">
        <h1>Student Registration Form</h1>

        <hr />
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
              ID
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="id"
              value={id}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="fname"
              value={fname}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="lname"
              value={lname}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
              Date Of Birth
            </label>
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Select Your Date Of Birth"
              name="dateofbirth"
              value={dateofbirth}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="" className="col-form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder=""
              name="email"
              value={email}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
              Mobile Number
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="mobilenumber"
              value={mobilenumber}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
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
    </div>
  );
};
