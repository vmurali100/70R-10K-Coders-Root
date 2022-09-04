import React,{useState} from 'react'
import Usersdata from './data.json'
export const Userstable = () => {
  const [users, setusers] = useState(Usersdata)
    console.log(Usersdata)

    const deleteuser=(fname)=>{
let newusers=users.filter((user)=>user.fname !==fname)
setusers(newusers)
    }
  return (
    <div className='container'>
      <table className="table">
  <thead>
    <tr>
      <th >fname</th>
      <th >lname</th>
      <th >tel</th>
      <th >address</th>
      <th>city</th>
      <th>state</th>
      <th>zip</th>
      <th>EDIT</th>
      <th>DELETE</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user,i)=>{
      return <tr key={i}>
        <td>{user.fname}</td>
        <td>{user.lname}</td>
        <td>{user.tel}</td>
        <td>{user.address}</td>
        <td>{user.city}</td>
        <td>{user.state}</td>
        <td>{user.zip}</td>
        <td><button className='btn btn-warning'>EDIT</button></td>
        <td> <button className='btn btn-danger' onClick={()=>{deleteuser(user.fname)}}>DELETE</button></td>
      </tr>
    })}
  </tbody>
</table>
    
    </div>
  )
}
