import React, { useEffect,useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export const Read = () => {
    const [user, setuser] = useState([])

    let url= "http://localhost:3000/Users"

    useEffect(()=>{
        axios.get(url).then((res)=>{
            localStorage.setItem("users", JSON.stringify(res.data))
            setuser(res.data)
        })
    },[])
  return (
    <div>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {user.map((PR,i)=>{
                    return <tr key = {i}>
                        <td>{PR.id}</td>
                        <td>{PR.email}</td>
                        <td>{PR.username}</td>
                        <td>{PR.password}</td>
                        <td>
                            <Link to={`/edit/${PR.id}`} className="btn btn-warning">Edit</Link>
                        </td>
                        <td>
                        <Link to={`/delete/${PR.id}`} className="btn btn-danger">Delete</Link>
                        </td>
                        <td>
                        <Link to={`/details/${PR.id}`} className="btn btn-primary">Details</Link>
                        </td>
                    
                    </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}
