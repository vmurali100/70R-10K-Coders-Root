import React from "react";

import userData from './data.json'

export const UserTable=()=>{
        console.log(userData)


     return(
        <div className="container">
           
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>password</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {userData.map((a,i)=>{
                        return <tr key={i}>
                            <td>{a.id}</td>
                            <td>{a.email}</td>
                            <td>{a.username}</td>
                            <td>{a.password}</td>
                            <td><button className="btn btn-warning">Edit</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
             
        </div>
     )   
}