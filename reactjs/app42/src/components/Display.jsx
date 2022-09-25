import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'


export const Display = () => {
    const [students, setstudents] = useState([])

    let url = "  http://localhost:3011/vijay/"

    useEffect(() => {

        axios.get(url).then((res) => {
            localStorage.setItem("sanjay",JSON.stringify(res.data))
            setstudents(res.data)
        })
    }, [])

    return (
        <div>
           <table className="table">
                <thead>
                    <tr>
                        <th >id</th>
                        <th >fname</th>
                        <th >lname</th>
                        
                        <th>edit</th>
                        <th>delete</th>
                        <th>details</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, i) => {
                        return <tr key={i} >
                            <td>{student.id}</td>
                            <td>{student.fname}</td>
                            <td>{student.lname}</td>
                         
                            <td>
                                <Link  className="btn btn-warning" to={`/edit/${student.id}`} >EDIT</Link>
                            </td>

                            <td>
                                <Link  className="btn btn-danger" to={`/delete/${student.id}`} >DELETE</Link>
                            </td>
                            
                            <td>
                                <Link  className="btn btn-primary" to={`/details/${student.id}`} >Details</Link>
                            </td>
                        </tr>

                    })}

                </tbody>
            </table>

        </div>
    )
}
