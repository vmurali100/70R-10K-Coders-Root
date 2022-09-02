import React, { useState } from "react";

export const Form5crud = () => {
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
        profile: "",
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: "",
    });
  };

  const deleteUser = (email) => {
    let newUsers = users.filter((myUser) => myUser.email !== email);
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
  const { profile, name, username, email, password, confirmpassword, message } =
    user;
  return (
    <div  class="p-3 mb-2 bg-secondary text-white">
      <h1>Bootstrap 4 Form Validation Demo</h1>
      <hr />

      <form>
        {/* <label htmlFor="">Profile: </label>
        <input
          type="text"
          name="profile"
          value={profile}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "} */}
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
        {/* <label htmlFor="">Message: </label>
        <input
          type="text"
          name="message"
          value={message}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "} */}
        <label htmlFor="textarea">Message :</label>
        <textarea name="message" value={message} cols="30" rows="2" onChange={(e) => {
            handleChange(e);
          }}></textarea>{" "}
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
        <button onClick={updateUser} type="button" class="btn btn-primary">
          Update User
        </button>
        <hr />
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
                      deleteUser(user.email);
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
