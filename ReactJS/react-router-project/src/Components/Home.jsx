import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h2>Welcome to Home Component </h2>
      <Outlet />
    </div>
  );
};