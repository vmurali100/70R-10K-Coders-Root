import React, { useState } from "react";

export const CreateUser = () => {
  const [user, setuser] = useState({
    id: "",
    email: "",
    username: "",
    password: "",
  });
  const [users, setusers] = useState([]);
  const [index, setindex] = useState(0);

  const handleChange=(e)=>{
    let newUser = {...user};
    newUser[e.target.name] = e.target.value;
    setuser(newUser)
  };
  const handleSubmit=()=>{
    console.log(user)
    let newUsers = [...users]
    newUsers.push(user)
    setusers(newUsers)
    clearForm()
  };

  const clearForm=()=>{
    setuser({
      id: "",
      email: "",
      username: "",
      password: "",
    })
  }

  const deleteUser=(id)=>{
    let newUsers = users.filter((myUser)=>myUser.id !==id);
    setusers(newUsers)
  }

  const handleEdit=(myUser,i)=>{
    setuser(myUser);
    setindex(i);
  }

  const updateUser=()=>{
    let newUsers = [...users];
    newUsers[index] = user;
    setusers(newUsers);
    clearForm();
  }
  const {id,email,username,password} = user;
  return (
    <div>
      <form>
        <label htmlFor="">ID</label>
        <input type="text" name="id" value={id} onChange={(e)=>{handleChange(e)}} /> <br />
        <label htmlFor="">Email</label>
        <input type="text" name="email" value={email} onChange={(e)=>{handleChange(e)}} /> <br />
        <label htmlFor="">Username</label>
        <input type="text" name="username" value={username} onChange={(e)=>{handleChange(e)}}/> <br />
        <label htmlFor="">Password</label>
        <input type="text" name="password" value={password}  onChange={(e)=>{handleChange(e)}}/> <br />
        <button type="button" onClick={()=>{handleSubmit()}} >Add User</button>
        <button onClick={updateUser} type="button">Update User</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th># ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user,i)=>{
                return <tr key={i}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td><button className="btn btn-warning" onClick={()=>{handleEdit(user,i)}}>Edit</button></td>
                    <td><button className="btn btn-danger" onClick={()=>{deleteUser(user.id)}}>Delete</button></td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  );
};
