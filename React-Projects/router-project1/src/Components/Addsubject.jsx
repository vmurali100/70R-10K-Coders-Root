
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export const Addsubject = () => {
   

    const [user, setuser] = useState({
       
        subjectname: "",
        description: "",
       
       
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
           
            subjectname: "",
            description: "",
            
           
        });
      };
    
const onSubmit =((e)=>{
  e.preventDefault()

})
    const { id, subjectname,description} =
    user;
  return (
    
    <div className="p-3 mb-2 bg-secondary text-white"><h1>Subject Details</h1>
   
    <hr />

    <form  onSubmit={onSubmit}>
   
      <label htmlFor="">Subject Name:</label>
      <input
        type="text"
        name="subjectname"
        value={subjectname}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
       <label htmlFor="textarea">Description :</label>
      <textarea name="description" value={description} cols="30" rows="2" onChange={(e) => {
          handleChange(e);
        }} ></textarea>{" "}
      <br />
      <br />
      <button
          onClick={addUser}
          type="button"
          style={{ color: "yellow", background: "black" }}
        >
          Add Subject
        </button>
        
      </form>
      
      </div>
  )
}
