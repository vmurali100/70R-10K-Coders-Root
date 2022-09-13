import React,{useState} from 'react'
import UsersData from './data.json'


export const Table = () => {
    const [users, setusers] = useState(UsersData);
    // const {id,email,username,password} = {users};

    const deleteUser=(id)=>{
      let newUsers= users.filter((user)=>user.id !== id);
      setusers(newUsers);
    }
  return (
    <div className='container'>
        <table className="table">
  <thead>
    <tr>
      <th >ID</th>
      <th >Username</th>
      <th >Email</th>
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
          <td><button className='btn btn-warning'>Edit</button></td>
          <td><button className='btn btn-danger' onClick={()=>{deleteUser(user.id)}}>Delete</button></td>
        </tr>
    })}
  </tbody>
</table>
    </div>
  )
}
