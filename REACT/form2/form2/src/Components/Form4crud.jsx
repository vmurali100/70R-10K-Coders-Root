import React, { useState } from "react";

export const Form4crud = () => {
  const [user, setuser] = useState({
    username: "",
    password: "",
    emailaddress: "",
    gender:"",
    dateofbirth: "",
    height: "",
    weight: ""
  });
  const [users, setusers] = useState([]);
  const [index, setindex] = useState(0);

  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setuser(newUser);
  };
  const handleSubmit = () => {
    console.log(user);
    let newUsers = [...users];
    newUsers.push(user);
    setusers(newUsers);
    clearForm();
  };

  const clearForm = () => {
    setuser({
        username: "",
        password: "",
        emailaddress: "",
        gender:"",
        dateofbirth: "",
        height: "",
        weight: ""
    });
  };

  const deleteUser = (username) => {
    let newUsers = users.filter((myUser) => myUser.username !== username);
    setusers(newUsers);
  };

  const handleEdit = (myUser, i) => {
    setuser(myUser);
    setindex(i);
  };

  const updateUser = () => {
    let newUsers = [...users];
    newUsers[index] = user;
    setusers(newUsers);
    clearForm();
  };
  const { username, password, emailaddress, gender, dateofbirth, height,weight } = user;
  return (
    <div>
      <h1>Matching Form</h1>
      <hr />
      
      <form>
        <label htmlFor="">User Name: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Password:</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
       
        <br />
        <label htmlFor="">Email Address:</label>
        <input
          type="email"
          name="emailaddress"
          value={emailaddress}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        {/* <label htmlFor="">Gender: </label>
        <input
          type="text"
          name="gender"
          value={gender}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "} */}
        
    <label htmlFor="">Gender</label>
    <select id="gender" name="gender" value={gender} onChange={(e) => {
            handleChange(e);
          }}>{" "}
      <option selected>Choose...</option>
      <option>Male</option>
      <option>Female</option>
      <option>Others</option>
    </select>{" "}
  
        <br />
    
        <label htmlFor="">Date of Birth: </label>
        <input
          type="date"
          name="dateofbirth"
          value={dateofbirth}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Height: </label>
        <input
          type="text"
          name="height"
          value={height}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Weight: </label>
        <input
          type="text"
          name="weight"
          value={weight}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <button
          type="button"
          class="btn btn-info"
          onClick={() => {
            handleSubmit();
          }}
        >
          Add User
        </button>
        <button
          onClick={updateUser}
          type="button"
          class="btn btn-success"
        >
          Update User
        </button>
        <hr />
      </form>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">User Name</th>
            <th scope="col">Password</th>
            <th scope="col">Email Address</th>
            <th scope="col">Gender</th>
            <th scope="col"> Date of Birth</th>
            <th scope="col">Height</th>
            <th scope="col">Weight</th>

            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.emailaddress}</td>
                <td>{user.gender}</td>
                <td>{user.dateofbirth}</td>
                <td>{user.height}</td>
                <td>{user.weight}</td>

                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      handleEdit(user, i);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(user.username);
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
  );
};
