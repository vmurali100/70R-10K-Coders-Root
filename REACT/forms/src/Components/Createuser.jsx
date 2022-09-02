import React, { useState } from "react";

export const Createuser = () => {
  const [user, setuser] = useState({
    id: "",
    fname: "",
    lname: "",
    dateofbirth: "",
    email: "",
    mobilenumber: ""
   
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
        id: "",
        fname: "",
        lname: "",
        dateofbirth: "",
        email: "",
        mobilenumber: ""
    });
  };

  const deleteUser = (id) => {
    let newUsers = users.filter((myUser) => myUser.id !== id);
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
  const {id,fname,lname,dateofbirth,email,mobilenumber} = user;
  return (
    <div>
        <h1>HTML Form</h1>
        <hr />
      <form>
        <label htmlFor="">ID</label>
        <input type="text" name="id" value={id} onChange={(e) => {handleChange(e); }}/>{" "}<br />
        <label htmlFor="">First Name</label>
        <input type="text" name="fname" value={fname} onChange={(e) => {handleChange(e); }}/>{" "}<br />
        <label htmlFor="">Last Name</label>
        <input type="text" name="lname" value={lname} onChange={(e) => {handleChange(e); }}/>{" "}<br />
        <label htmlFor="">Date of Birth</label>
        <input type="text" name="dateofbirth" value={dateofbirth} onChange={(e) => {handleChange(e); }}/>{" "}<br />

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
          type="button" style={{color:'yellow' ,background:'black'}}
          onClick={() => {
            handleSubmit();
          }}
        >
          Add User
        </button>
        <button onClick={updateUser} type="button" style={{color:'black',background:'orange'}}>
          Update User
        </button>
        <hr />
      </form>

      <table className="table">
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
  );
};
