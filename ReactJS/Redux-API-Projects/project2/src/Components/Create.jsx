/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUsersAction } from "../Store/Slice";
import { AllUsers } from "./AllUsers";

export const Create = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [user, setuser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    address:{
      street:"",
      suite:"",
      city:"",
      zipcode:""
    },
    phone:"",
    website:""
  });

  const { id, name, username, email,street,suite, city,zipcode,phone,website,address} = user;

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
