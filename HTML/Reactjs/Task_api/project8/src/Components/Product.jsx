import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export const Product = () => {
    const [product, setproduct] = useState([])

    let url = ""

    useEffect(() => {
        axios.get(url).then((res) => {
            localStorage.setItem("users", JSON.stringify(res.data))
            setproduct(res.data)
        })
    }, [])
    return (
        <div>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((PS, i) => {
                        return <tr key={i}>
                            <td>{PS.id}</td>
                            <td>{PS.title}</td>
                            <td>{PS.price}</td>
                            <td>{PS.description}</td>
                            <td>{PS.category}</td>
                            <td>
                                <Link to={`/edit/${PS.id}`} className="btn btn-warning">Edit</Link>
                            </td>
                            <td>
                                <Link to={`/delete/${PS.id}`} className="btn btn-danger">Delete</Link>
                            </td>
                            <td>
                                <Link to={`/details/${PS.id}`} className="btn btn-primary">Details</Link>
                            </td>

                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}