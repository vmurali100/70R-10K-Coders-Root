import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Store/ProductSlice";

export const Products = () => {
  const productDetails = useSelector((state) => state.products);
  console.log(productDetails.products);

  const dispatch = useDispatch();
  const getAllProducts = () => {
    dispatch(getProducts());
  };
  return (
    <div>
      <button onClick={getAllProducts}>Get Products</button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">EMAIL</th>
            <th scope="col">USERNAME</th>
            <th scope="col">PASSWORD</th>
            <th scope="col">EDIT</th>
            <th scope="col">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.user.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
