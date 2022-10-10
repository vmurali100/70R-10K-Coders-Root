/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUsersAction } from "../Store/Slice";
import { AllUsers } from "./AllUsers";

export const Edit = () => {
  const btnText = "Update User";
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  // const { id, name, username, email,street,suite, city,zipcode,phone,website,address} = user;


  const userInfo = useParams()

  
  const handleEdit = () => {
    dispatch(editUsersAction(user));
    navigate("/");
  };

  const handleChange = (e) => {
    const newUser = { ...user };
    newUser.address[e.target.name] = e.target.value;
    setuser(newUser);
  };

  useEffect(()=>{
    const allUsers = JSON.parse(localStorage.getItem("user"))
    const newUser= allUsers.find((myuser)=> myuser.id == userInfo.id)
    setuser(newUser)
  },[])
  return (
    <div className="container">
      <AllUsers
        btnText={btnText}
        handleEvent={handleEdit}
        handleChangeEvent={handleChange}
        user={user}
      />
    </div>
  );
};
