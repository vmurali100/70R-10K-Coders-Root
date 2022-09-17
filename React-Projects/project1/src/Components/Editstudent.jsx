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
      

      <div className="p-3 mb-2 bg-secondary text-white">
      <div className="w-75 mx-auto shadow p-5">
        <h1>Student Update Form</h1>

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
            onClick={updateUser}
            type="button"
            className="btn btn-primary"
          >
            Update User
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};
