import React, { useState } from 'react'
import UserData from './data.json'
export const UserTable = () => {
    const [User, setUser] = useState(UserData)
    console.log(UserData)
    return (
        

        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"># ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">User name</th>
                        <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {User.map((User, i) => {
                        return <tr key={i}>
                            <td>{User.id}</td>
                            <td>{User.email}</td>
                            <td>{User.username}</td>
                            <td>{User.password}</td>
                            <td ><button className="btn btn-warning">Edit</button></td>
                            <td><button className="btn btn-danger"> Delete</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    );
};
