import React,{useState} from 'react'
import UserData from './data.json';

export const UserTable2 = () => {
    const [userData, setuserData] = useState(UserData)

  return (
    <div>
        <table  className="table">
            <thead>
                <tr className="table-primary">
                    <th>Id</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {userData.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                    </tr>
                    
                })}
            </tbody>
        </table>
    </div>
  )
}
