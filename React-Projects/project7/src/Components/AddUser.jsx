import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AddUser = () => {
  const [user, setuser] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });
  const [users, setusers] = useState([]);
  const navigate = useNavigate();
  let url = "http://localhost:4003/user";
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
    let url = "http://localhost:4003/user";
    axios.post(url, user).then(() => {
      console.log("user added successfully");

      alert("User Added successfully");

      clearForm();
      navigate("/Users");
      getDataFromServer();
    });
  };
  const clearForm = () => {
    setuser({
      userId: "",
      id: "",
      title: "",
      body: "",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const { id,userId,title,body} =
    user;
  return (
    <div className="p-3 mb-2 bg-secondary text-white">
      <div className="w-75 mx-auto shadow p-5">
        <h1>Registration Form</h1>

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
          User ID
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="userId"
          value={userId}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="" className="col-form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="title"
          value={title}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
    
      <div className="form-group">
              <label htmlFor="textarea" className="col-form-label">
                Body
              </label>
              <textarea
                cols="30"
                rows="2"
                className="form-control form-control-lg"
                placeholder=""
                name="body"
                value={body}
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
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};
