import React, { useEffect,useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export const Personal = () => {
    const [personal, setpersonal] = useState([])

    let url= "http://localhost:3007/scores"

    useEffect(()=>{
        axios.get(url).then((res)=>{
            localStorage.setItem("users", JSON.stringify(res.data))
            setpersonal(res.data)
        })
    },[])
  return (
    <div>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>University</th>
                    <th>Institute</th>
                    <th>Branch</th>
                    <th>Degree</th>
                    <th>Average</th>
                    <th>Experience</th>
                    <th>Website</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {personal.map((PD,i)=>{
                    return <tr key = {i}>
                        <td>{PD.id}</td>
                        <td>{PD.university}</td>
                        <td>{PD.institute}</td>
                        <td>{PD.branch}</td>
                        <td>{PD.degree}</td>
                        <td>{PD.average}</td>
                        <td>{PD.experience}</td>
                        <td>{PD.website}</td>

                        <td>
                            <Link to={`/edit/${PD.id}`} className="btn btn-warning">Edit</Link>
                        </td>
                        <td>
                        <Link to={`/delete/${PD.id}`} className="btn btn-danger">Delete</Link>
                        </td>
                        <td>
                        <Link to={`/details/${PD.id}`} className="btn btn-primary">Details</Link>
                        </td>
                    
                    </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}