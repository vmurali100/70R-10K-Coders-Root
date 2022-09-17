import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Display = () => {
    const [das, setdas] = useState([])

    let url = "http://localhost:4000/one/"

    useEffect(() => {
        axios.get(url).then((res) => {
            localStorage.setItem("one", JSON.stringify(res.data))
            setdas(res.data)
        })
    }, [])


    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th >fname</th>
                        <th >lname</th>
                        <th>edit</th>
                        <th>delete</th>
                        <th>details</th>
                    </tr>
                </thead>
                <tbody>
                    {das.map((ak, i) => {
                        return <tr key={i} >
                            <td>{ak.id}</td>
                            <td>{ak.fname}</td>
                            <td>{ak.lname}</td>
                            <td>
                                <Link className="btn btn-warning" to={`/edit/${ak.id}`} >EDIT</Link>
                            </td>

                            <td>
                                <Link className="btn btn-danger"  to={`/delete/${ak.id}`} >DELETE</Link>
                            </td>

                            <td>
                                <Link className="btn btn-primary" to={`/details/${ak.id}`}>Details</Link>
                            </td>
                        </tr>

                    })}

                </tbody>
            </table>

        </div>
    )
}

