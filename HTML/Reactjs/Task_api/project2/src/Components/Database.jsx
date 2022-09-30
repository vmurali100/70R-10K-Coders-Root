import React, { useEffect,useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export const Database = () => {
  const [data, setdata] = useState([])

  let url="/"

  useEffect(()=>{
    axios.get(url).then((res)=>{
        localStorage.setItem("users", JSON.stringify(res.data))
        setdata(res.data)
    })
},[])

  return (
    <div>
      
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Userid</th>
                    <th>Title</th>
                    <th>Complete</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {data.map((DB,i)=>{
                    return <tr key = {i}>
                        <td>{DB.id}</td>
                        <td>{DB.userid}</td>
                        <td>{DB.title}</td>
                        <td>{DB.complete}</td>
                        
                        <td>
                        <Link to={`/edit/${DB.id}`} className="btn btn-warning">Edit</Link>
                        </td>
                        <td>
                        <Link to={`/delete/${DB.id}`} className="btn btn-danger">Delete</Link>
                        </td>
                        <td>
                        <Link to={`/details/${DB.id}`} className="btn btn-primary">Details</Link>
                        </td>
                    
                    </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}