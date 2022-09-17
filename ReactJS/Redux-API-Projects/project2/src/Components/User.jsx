import React from "react";
import { useSelector } from "react-redux";

export const User = () => {
  const userDetails = useSelector((state) => state.user);
  console.log(userDetails.user);
  return <div>User</div>;
};
