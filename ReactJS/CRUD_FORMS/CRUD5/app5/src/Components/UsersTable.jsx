import React,{useState} from "react";
import UsersData from "./data.json"; //imp
export const UsersTable = () => {
  const [users, setusers] = useState(UsersData)//creating variable using hook
  console.log(UsersData);
  const deleteUser=(username)=>{
    let newUsers=users.filter((user)=>user.username !=username);
    setusers(newUsers)
  }
  return (
    <div className="container">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th >Username</th>
            <th >Email Address</th>
            <th >Password</th>
            <th >Date of Birth</th>
            <th >Height</th>
            <th >Weight</th>



            <th> Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>

          {users.map((user,i)=>{//to display
            return <tr key={i}>
              <td>{user.username}</td>
              <td>{user.emailaddress}</td>
              <td>{user.password}</td>
              <td>{user.dateofbirth}</td>
              <td>{user.height}</td>
              <td>{user.weight}</td>




              <td><button className="btn btn-warning">Edit</button></td>
              <td><button className="btn btn-danger" onClick={()=>{deleteUser(user.username)}}>Delete </button></td>
            </tr>
          })}
          
        </tbody>
      </table>
    </div>
  );
};
