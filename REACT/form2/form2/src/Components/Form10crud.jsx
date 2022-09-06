import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";


export const Form10crud = () => {
    const [user, setuser] = useState({
        profile: "",
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: "",
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
            profile: "",
            name: "",
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
            message: ""
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
const onSubmit =((e)=>{
  e.preventDefault()
const isValid = formValidation()
})
const formValidation=()=>{

}


    const { profile, name, username, email, password, confirmpassword, message } =
    user;
  return (
    <div class="p-3 mb-2 bg-secondary text-white"><h1>Bootstrap 4 Form Validation Demo</h1>
    <hr />

    <form  onSubmit={onSubmit}>
     
      <label htmlFor="file">Profile:</label>
      <input type="file" id="file" name="profile" value={profile} onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      <br />
      <label htmlFor="">Name:</label>
      <input
        type="text"
        name="name"
        value={name}
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
      <label htmlFor="">Password: </label>
      <input
        type="text"
        name="password"
        value={password}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      <br />
      <label htmlFor="">Confirm Password: </label>
      <input
        type="text"
        name="confirmpassword"
        value={confirmpassword}
        onChange={(e) => {
          handleChange(e);
        }}
      />{" "}
      <br />
      <br />
      
      <label htmlFor="textarea">Message :</label>
      <textarea name="message" value={message} cols="30" rows="2" onChange={(e) => {
          handleChange(e);
        }}></textarea>{" "}
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
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Profile</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Confirm Password</th>
            <th scope="col">Message</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.profile}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.confirmpassword}</td>
                <td>{user.message}</td>
                <td>
                  <button
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
      </div>
  )
}
