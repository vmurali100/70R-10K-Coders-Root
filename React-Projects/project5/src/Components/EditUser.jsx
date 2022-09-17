import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
export const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setuser] = useState({
    id: "",
    profile: "",
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: "",
  });

  useEffect(() => {
    getDataFromServer();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/user/${id}`, user);
    navigate("/Users");
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
      navigate("/Users");
      alert("User Updated successfully");
      getDataFromServer();
      clearForm();
    });
  };
  const clearForm = () => {
    setuser({
      id: "",
      profile: "",
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: "",
    });
  };

  const { image, name, username, email, password, confirmpassword, message } =
    user;

  return (
    <div>
      

      <div className="p-3 mb-2 bg-secondary text-white">
      <div className="w-75 mx-auto shadow p-5">
        <h1>Update Form</h1>

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
            <label htmlFor="file" accept="image/*" className="col-form-label">
            Profile
            </label>
            <input
              type="file" accept="image/*" 
              className="form-control form-control-lg"
              placeholder=""
              name="image"
              value={image}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="name"
              value={name}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
            User  Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="username"
              value={username}
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
            Password
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="password"
              value={password}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
             Confirm Password
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="confirmpassword"
              value={confirmpassword}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="textarea" className="col-form-label">
            Message
            </label>
            <textarea
             cols="30" rows="2" 
              className="form-control form-control-lg"
              placeholder=""
              name="message"
              value={message}
              onChange={(e) => {
                handleChange(e);
              }}
            ></textarea>
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
