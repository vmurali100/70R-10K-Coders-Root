import React, { useEffect,useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export const Page = () => {
    const [page, setpage] = useState([])

    let url= "http://localhost:3005/products"

    useEffect(()=>{
        axios.get(url).then((res)=>{
            localStorage.setItem("users", JSON.stringify(res.data))
            setpage(res.data)
        })
    },[])
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
                {page.map((PG,i)=>{
                    return <tr key = {i}>
                        <td>{PG.id}</td>
                        <td>{PG.title}</td>
                        <td>{PG.price}</td>
                        <td>{PG.description}</td>
                        <td>{PG.category}</td>
                        <td>
                            <Link to={`/edit/${PG.id}`} className="btn btn-warning">Edit</Link>
                        </td>
                        <td>
                        <Link to={`/delete/${PG.id}`} className="btn btn-danger">Delete</Link>
                        </td>
                        <td>
                        <Link to={`/details/${PG.id}`} className="btn btn-primary">Details</Link>
                        </td>
                    
                    </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}
