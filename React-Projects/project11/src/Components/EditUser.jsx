import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
export const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setuser] = useState({
    id: "",
        name: "",
        username: "",
        email: "",
        address:[ {
          street: "",
          suite: "",
          city: "",
        zipcode: "",
          geo: [{
            lat: "",
            lng: ""
          }],
        }],
        phone: "",
        website: "",
        company:[ {
          name: "",
          catchPhrase: "",
          bs: ""
        }]
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
        name: "",
        username: "",
        email: "",
        address:[ {
          street: "",
          suite: "",
          city: "",
        zipcode: "",
          geo: [{
            lat: "",
            lng: ""
          }],
        }],
        phone: "",
        website: "",
        company:[ {
          name: "",
          catchPhrase: "",
          bs: ""
        }]
    });
  };

  const {name,username,email,phone,website} =
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
          User Name
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
          Phone
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="phone"
          value={phone}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="" className="col-form-label">
          Website
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="website"
          value={website}
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
