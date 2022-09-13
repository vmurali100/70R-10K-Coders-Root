import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
export const Editstudent = () => {
  const [user, setuser] = useState({
    id: "",
    fname: "",
    lname: "",
    dateofbirth: "",
    email: "",
    mobilenumber: "",
  });
  const [users, setusers] = useState([]);
  let url = "http://localhost:3000/user";

  useEffect(() => {
    getDataFromServer();
  }, []);

  const getDataFromServer = () => {
    axios.get(url).then((response) => {
      console.log(response);
      setusers(response.data);
    });
  };
  const handleEdit = (user) => {
    setuser(user);
  };

  const updateUser = () => {
    axios.put(url + user.id, user).then(() => {
      console.log("updated");
      getDataFromServer();
      clearForm();
    });
  };
  const clearForm = () => {
    setuser({
      id: "",
      fname: "",
      lname: "",
      dateofbirth: "",
      email: "",
      mobilenumber: "",
    });
  };

  const { id, fname, lname, dateofbirth, mobilenumber, email } = user;

  return (
    <div>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => {
          handleEdit(user.id);
        }}
      >
        Edit
      </button>
      <button
        onClick={updateUser}
        type="button"
        style={{ color: "black", background: "orange" }}
      >
        Update User
      </button>
    </div>
  );
};
