import React,{useState} from 'react'
import UsersData from './data.json'

export const UsersTable = () => {
    // console.log(UsersData)
    const [users, setusers] = useState(UsersData)

   const deleteUser=(x)=>{
    let newUsers=users.filter((user)=> user.id !== x);
     setusers(newUsers);
   }
  return (
    <div>
        <table className="table">
  <thead>
    <tr>
      <th >ID</th>
      <th >EmailId</th>
      <th >Username</th>
      <th >Password</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
   {users.map((user,i) =>{
    return <tr key={i}>
        <td>{user.id}</td>
        <td>{user.email}</td>
        <td>{user.username}</td>
        <td>{user.password}</td>
        <td><button type='button' className='btn btn-warning'>Edit</button></td>
        <td><button type='button' className='btn btn-danger' onClick={()=>{deleteUser(user.id)}}>Delete</button></td>
    </tr>
   })}
  </tbody>
</table>
    </div>
  )
}
