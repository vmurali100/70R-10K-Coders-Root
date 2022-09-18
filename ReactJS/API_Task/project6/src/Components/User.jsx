import React, { useEffect,useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export const User = () => {
    const [user, setuser] = useState([])

    let url= "http://localhost:3006/main"

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
                    <th>Fname</th>
                    <th>Lname</th>
                    <th>City</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {user.map((US,i)=>{
                    return <tr key = {i}>
                        <td>{US.id}</td>
                        <td>{US.fname}</td>
                        <td>{US.lname}</td>
                        <td>{US.city}</td>
                        <td>
                            <Link to={`/edit/${US.id}`} className="btn btn-warning">Edit</Link>
                        </td>
                        <td>
                        <Link to={`/delete/${US.id}`} className="btn btn-danger">Delete</Link>
                        </td>
                        <td>
                        <Link to={`/details/${US.id}`} className="btn btn-primary">Details</Link>
                        </td>
                    
                    </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}
