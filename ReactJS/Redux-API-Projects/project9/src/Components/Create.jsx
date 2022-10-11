/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUsersAction } from "../Store/ProductSlice";
import { AllUsers } from "./AllUsers";

export const Create = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [user, setuser] = useState({
    id: "",
    title: "",
    price:"",
    description:"",
    category:""
  });


  const btnText = "Add User";

  const handleCreate = () => {
    dispatch(createUsersAction(user))
    navigate("/")
  };

  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setuser(newUser)
  };

  return (
    <div className="container">
      <AllUsers
        btnText={btnText}
        handleEvent={handleCreate}
        handleChangeEvent={handleChange}
        user={user}
      />
    </div>
  );
};
