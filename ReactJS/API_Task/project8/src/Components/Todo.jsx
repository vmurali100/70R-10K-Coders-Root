import React, { useEffect,useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export const Todo = () => {
    const [todo, settodo] = useState([])

    let url= "http://localhost:3008/lists"

    useEffect(()=>{
        axios.get(url).then((res)=>{
            localStorage.setItem("users", JSON.stringify(res.data))
            settodo(res.data)
        })
    },[])
  return (
    <div>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zipcode</th>
                    <th>Country</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {todo.map((TD,i)=>{
                    return <tr key = {i}>
                        <td>{TD.id}</td>
                        <td>{TD.street}</td>
                        <td>{TD.city}</td>
                        <td>{TD.state}</td>
                        <td>{TD.zipcode}</td>
                        <td>{TD.country}</td>

                        <td>
                            <Link to={`/edit/${TD.id}`} className="btn btn-warning">Edit</Link>
                        </td>
                        <td>
                        <Link to={`/delete/${TD.id}`} className="btn btn-danger">Delete</Link>
                        </td>
                        <td>
                        <Link to={`/details/${TD.id}`} className="btn btn-primary">Details</Link>
                        </td>
                    
                    </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}
