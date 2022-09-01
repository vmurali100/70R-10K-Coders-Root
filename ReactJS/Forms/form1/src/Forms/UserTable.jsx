import React,{useState} from "react";
import UserData from "./data.json";
export const UserTable = () => {
    const [user, setuser] = useState(UserData)
//   console.log(UserData);

    const handleUser=(id)=>{
        let newUsers = user.filter((user)=>user.id!==id)
        setuser(newUsers)
    }
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th >#Id</th>
            <th >Email</th>
            <th >Username</th>
            <th >Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user,i)=>{
            return <tr key={i}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td><button className="btn btn-warning">Edit</button></td>
                <td><button className="btn btn-danger" onClick={()=>{handleUser(user.id)}}>Delete</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
};
