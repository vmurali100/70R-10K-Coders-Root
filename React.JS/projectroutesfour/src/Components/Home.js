import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to="/">Carts</Link> <br />
      <Link to="/CreateCart">Create Cart</Link>
    </div>
  );
};
