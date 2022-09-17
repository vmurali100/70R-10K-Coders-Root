import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AddProduct = () => {
  const [user, setuser] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",

    rating: [
      {
        rate: "",
        count: "",
      },
    ],
  });
  const [users, setusers] = useState([]);
  const navigate = useNavigate();
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
  const addUser = () => {
    let url = "http://localhost:4000/user";
    axios.post(url, user).then(() => {
      console.log("user added successfully");

      alert("User Added successfully");

      clearForm();
      navigate("/Products");
      getDataFromServer();
    });
  };
  const clearForm = () => {
    setuser({
        id: "",
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
    
        rating: [
          {
            rate: "",
            count: "",
          },
        ],
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const { id,title, price, description, category, image,rating,rate,count } =
  user;
  return (
    <div className="p-3 mb-2 bg-secondary text-white">
      <div className="w-75 mx-auto shadow p-5">
        <h1>Add Product Form</h1>

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
            <label htmlFor="" className="col-form-label">
            Price
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="price"
              value={price}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="textarea" className="col-form-label">
             Description
            </label>
            <textarea
             cols="30" rows="2"
              className="form-control form-control-lg"
              placeholder=""
              name="description"
              value={description}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
             Category
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="category"
              value={category}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          <div  className="form-group">
            <label htmlFor=" " className="col-form-label" >
            Image
            </label>
            <input
              type="file"
             
              className="form-control form-control-lg"
              name="image"
              accept="image/png,image/jpeg"
              
              onChange={(e) => {
                handleChange(e);
              }} 
            /><img style={{ width: 60, height: 60 }} src={image} />
             {/* <img style= {{width:100,height:100}} src={"http://localhost:4000/user/"+user.image}/> */}
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
             Rate
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="rate"
              value={rating.rate}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="col-form-label">
             Count
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder=""
              name="count"
              value={rating.count}
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
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};
