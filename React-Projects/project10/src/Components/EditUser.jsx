import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
export const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
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

  useEffect(() => {
    getDataFromServer();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4001/user/${id}`, user);
    navigate("/Users");
  };

  const getDataFromServer = () => {
    axios.get(`http://localhost:4001/user/${id}`).then((response) => {
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
    let url = "http://localhost:4001/user/";
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

  const { userId,date,products,productId,quantity,__v} =
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
