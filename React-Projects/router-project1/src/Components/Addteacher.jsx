
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export const Addteacher = () => {
    const [user, setuser] = useState({
     
        teachername: "",
        department: "",
        mobileno: "",
       
      });
      const [users, setusers] = useState([]);
      let url = "http://localhost:3201/user";
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
        let url = "http://localhost:3201/user";
        axios.post(url, user).then(() => {
          console.log("user added successfully");
          clearForm();
          getDataFromServer();
        });
      };
      const clearForm = () => {
        setuser({
           
        teachername: "",
        department: "",
        mobileno: "",
           
        });
      };
    
const onSubmit =((e)=>{
  e.preventDefault()

})
    const { teachername, department,mobileno} =
    user;
  return (
    
    <div className="p-3 mb-2 bg-secondary text-white"><h1>Faculty Registration Form</h1>
   
    <hr />

    <form  onSubmit={onSubmit}>
    
      <label htmlFor=""> Teacher Name:</label>
      <input
        type="text"
        name="teachername"
        value={teachername}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      <br />
      <label htmlFor="">Department:</label>
      <input
        type="text"
        name="department"
        value={department}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      <br />
      <label htmlFor="">Mobile Number: </label>
      <input
        type="text"
        name="mobileno"
        value={mobileno}
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
          Add Teacher
        </button>
        
      </form>
      
      </div>
  )
}
