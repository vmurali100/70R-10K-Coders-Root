import React,{useState} from 'react'
import UsersData from './data.json'

export const UsersTable = () => {
    const [users, setusers] = useState(UsersData)
    console.log(UsersData);
  const deleteUser=(name)=>{
    let newUsers=users.filter((user)=>user.name !=name);
    setusers(newUsers)
  }
  return (
    <div className="container">
      <table className="table table-success table-striped-columns">
        <thead>
          <tr>
            <th >Name</th>
            <th >Username</th>
            <th >Email</th>
            <th >Password</th>
            <th >Confirm Password</th>
            <th >Message</th>
            <th> Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>

          {users.map((user,i)=>{//to display
            return <tr key={i}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.confirmpassword}</td>
              <td>{user.message}</td>


              <td><button className="btn btn-warning">Edit</button></td>
              <td><button className="btn btn-danger" onClick={()=>{deleteUser(user.name)}}>Delete </button></td>
            </tr>
          })}
          
        </tbody>
      </table>
    </div>
  );
};


    