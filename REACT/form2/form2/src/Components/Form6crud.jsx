import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
export const Form6crud = () => {
  const [user, setuser] = useState({
    id: "",
    fname: "",
    lname: "",
    dateofbirth: "",
    email: "",
    mobilenumber: "",
  });
  const [users, setusers] = useState([]);
  let url = "http://localhost:3000/user/";

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
    let url = "http://localhost:3000/user/";
    axios.post(url, user).then(() => {
      console.log("user added successfully");
      clearForm();
      getDataFromServer();
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
  const deleteUser = (id) => {
    axios.delete(url + id).then(() => {
      console.log("user deleted asuccessfully");
      getDataFromServer();
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
  const { id, fname, lname, dateofbirth, email, mobilenumber } = user;
  return (
    <div>
      <h1>HTML Form</h1>
      <hr />
      <form>
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
        <label htmlFor="">First Name</label>
        <input
          type="text"
          name="fname"
          value={fname}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          name="lname"
          value={lname}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Date of Birth</label>
        <input
          type="text"
          name="dateofbirth"
          value={dateofbirth}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Mobile Number</label>
        <input
          type="text"
          name="mobilenumber"
          value={mobilenumber}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <br />
        <button
          onClick={addUser}
          type="button"
          style={{ color: "yellow", background: "black" }}
        >
          Add User
        </button>
        <button
          onClick={updateUser}
          type="button"
          style={{ color: "black", background: "orange" }}
        >
          Update User
        </button>
        <hr />
        <table className="table" border={1}>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user.id}</td>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.dateofbirth}</td>
                  <td>{user.email}</td>
                  <td>{user.mobilenumber}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => {
                        handleEdit(user);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
};
