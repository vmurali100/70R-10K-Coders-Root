
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export const Addstudent = () => {
    const [user, setuser] = useState({
        id: "",
        studentname: "",
        username: "",
        email: "",
       
      });
      const [users, setusers] = useState([]);
      let url = "http://localhost:3201/userdetails";
      useEffect(() => {
        getDataFromServer();
      }, []);
      const getDataFromServer = () => {
        axios.get(url).then((response) => {
          console.log(response);
          setusers(response.data);
        });
      };
      const handleChange = (e) => {
        let newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setuser(newUser);
      };
      const addUser = () => {
        let url = "http://localhost:3201/userdetails";
        axios.post(url, user).then(() => {
          console.log("user added successfully");
          clearForm();
          getDataFromServer();
        });
      };
      const clearForm = () => {
        setuser({
            id: "",
            studentname: "",
            username: "",
            email: "",
           
        });
      };
   
const onSubmit =((e)=>{
  e.preventDefault()

})
    const { id, studentname, username, email} =
    user;
  return (
    
    <div className="p-3 mb-2 bg-secondary text-white"><h1>Student Registration Form</h1>
   
    <hr />

    <form  onSubmit={onSubmit}>
    <label htmlFor="">ID</label>
        <input
          type="text"
          name="id"
          value={id}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
      <label htmlFor="">Name:</label>
      <input
        type="text"
        name="studentname"
        value={studentname}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      <br />
      <label htmlFor="">User Name:</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      <br />
      <label htmlFor="">Email: </label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      
      <br />
      <button
          onClick={addUser}
          type="button"
          style={{ color: "yellow", background: "black" }}
        >
          Add Student
        </button>
        
      </form>
     
      </div>
  )
}
