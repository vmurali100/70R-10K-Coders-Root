/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  let componentMounted = true;
  // fetching data from Api
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https:fakestoreapi.com/products");
      if (componentMounted) {
        setdata(await response.clone().json());
        setfilter(await response.json());
        console.log(filter);
      }
    };
    getProducts();
  }, []);
  // filter the category's
  const filterProduct = (cat) => {
    const updatesList = data.filter((x) => x.category === cat);
    setfilter(updatesList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => setfilter(data)}
          >
            All
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Mens's Clothing
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Womens's Clothing
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
          <div className="row justify-content-center">
            <ShowProducts />
            {filter.map((product) => {
              return (
                <>
                  <div className="col-md-3 mb-4">
                    <div className="card h-100 text-center p-4 ">
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.title}
                        height="250"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          {product.title.substring(0, 12)}...
                        </h5>
                        <p className="card-text lead fw-bold">
                          ${product.price}
                        </p>
                        <Link
                          to={`/products/${product.id}`}
                          className="btn btn-outline-dark"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
