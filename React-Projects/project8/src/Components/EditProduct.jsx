import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
export const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
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

  useEffect(() => {
    getDataFromServer();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/user/${id}`, user);
    navigate("/Products");
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
      navigate("/Products");
      alert("User Updated successfully");
      getDataFromServer();
      clearForm();
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

  const { title, price, description, category, image, rating, rate, count } =
    user;

  return (
    <div>
      <div className="p-3 mb-2 bg-secondary text-white">
        <div className="w-75 mx-auto shadow p-5">
          <h1>Product Update Form</h1>

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
                cols="30"
                rows="2"
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

            <div className="form-group">
              <label htmlFor="" className="col-form-label">
                Image
              </label>
              <input
                className="form-control form-control-lg"
                onChange={(e) => {
                  handleChange(e);
                }}
                type="file"
                name="image"
                accept="image/png,image/jpeg"
              />{" "}
              <img style={{ width: 60, height: 50 }} src={image} />
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
              onClick={updateUser}
              type="button"
              className="btn btn-primary"
            >
              Update Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
