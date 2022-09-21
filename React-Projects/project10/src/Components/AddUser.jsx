import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AddUser = () => {
  const [user, setuser] = useState({
    id: "",
    userId: "",
    date: "",
    products: [
      {
        productId: "",
        quantity: ""
      }
    ],
    __v: ""
  });
  const [users, setusers] = useState([]);
  const navigate = useNavigate();
  let url = "http://localhost:4001/user";
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
    let url = "http://localhost:4001/user";
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
      id: "",
    userId: "",
    date: "",
    products: [
      {
        productId: "",
        quantity: ""
      }
    ],
    __v: ""
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const { id,userId,date,products,productId,quantity,__v} =
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
          Date
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="date"
          value={date}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
     
    
      <div className="form-group">
        <label htmlFor="" className="col-form-label">
          productId
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="productId"
          value={productId}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="" className="col-form-label">
          Quantity
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="quantity"
          value={quantity}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
     
      <div className="form-group">
        <label htmlFor="" className="col-form-label">
          Version
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder=""
          name="__v"
          value={__v}
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
