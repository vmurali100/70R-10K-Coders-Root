import React,{useState} from "react";
import UsersData from "./data.json"; //imp
export const UsersTable = () => {
  const [users, setusers] = useState(UsersData)//creating variable using hook
  console.log(UsersData);
  const deleteUser=(id)=>{
    let newUsers=users.filter((user)=>user.id !=id);
    setusers(newUsers)
  }
  return (
    <div className="container">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th >ID</th>
            <th >Username</th>
            <th >Email</th>
            <th >Password</th>
            <th> Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>

          {users.map((user,i)=>{//to display
            return <tr key={i}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>

              <td><button className="btn btn-warning">Edit</button></td>
              <td><button className="btn btn-danger" onClick={()=>{deleteUser(user.id)}}>Delete </button></td>
            </tr>
          })}
          
        </tbody>
      </table>
    </div>
  );
};
