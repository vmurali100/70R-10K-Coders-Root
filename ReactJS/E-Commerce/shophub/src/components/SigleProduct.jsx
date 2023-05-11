/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions/CartActions";

export default function SigleProduct() {
  const [product, setProduct] = useState([]);
  // it returns an object of key/values pairs from current url matched by the path
  const { id } = useParams();
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart(product));
  };
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
    };
    getProduct();
  }, []);
  return (
    <>
      <div className="container py-5 ">
        <div className="row py-5">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.title}
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead fw-bolder">
              Rating {product.rating && product.rating.rate}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-4"> ${product.price}</h3>
            <p className="lead">{product.description}</p>
            <button
              className="btn btn-outline-dark px-4 py-2"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">
              Go to Cart
            </Link>
            <Link to="/products" className="btn btn-primary ms-2 px-3 py-2">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
