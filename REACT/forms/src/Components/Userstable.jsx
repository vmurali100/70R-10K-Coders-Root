import React,{useState} from 'react'
import UsersData from "./data.json"
export const Userstable = () => {
  const [users, setusers] = useState(UsersData)
  console.log(UsersData)

  const deleteUser=(id)=>{
    let newUsers = users.filter((user)=>user.id !==id);
    setusers(newUsers)
  }

  return (
    <div className='container'>
     <table class="table">
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
   {users.map((user,i)=>{
    return <tr key={i}>
      <td>{user.id}</td>
      <td>{user.fname}</td>
      <td>{user.lname}</td>
      <td>{user.dateofbirth}</td>
      <td>{user.email}</td>
      <td>{user.mobilenumber}</td>
      <td><button className='btn btn-warning'>Edit</button></td>
      <td><button className='btn btn-danger' onClick={()=>{deleteUser(user.id)}}>Delete</button></td>


    </tr>
   })}
  </tbody>
</table>
    </div>
  )
}
