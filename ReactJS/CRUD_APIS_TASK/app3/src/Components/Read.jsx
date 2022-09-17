
import React, { useEffect,useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


export const Read = () => {
    const [comment, setcomment] = useState([])

    let url= "http://localhost:4004/comments/"


    useEffect(()=>{
        axios.get(url).then((res)=>{
            localStorage.setItem("comments", JSON.stringify(res.data))
            setcomment(res.data)
        })
    },[])
    
  return (
    <div>
        <table class="table table-success table-striped-columns">
        <thead>
                    <tr>
                <th>ID</th>
                <th>PostId</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
                <th>Details</th>
                <th>Edit</th>
                <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {comment.map((KK,i)=>{
                        return <tr key = {i}>
                            <td>{KK.id}</td>
                            <td>{KK.postId}</td>
                            <td>{KK.name}</td>
                            <td>{KK.email}</td>
                            <td>{KK.body}</td>
                            <td>



                        <Link to={`/details/${KK.id}`} className="btn btn-success">Details</Link>

                        </td>

                        <td>
                        <Link to={`/edit/${KK.id}`} className="btn btn-warning">Edit</Link>
                        </td>

                        <td>

                        <Link to={`/delete/${KK.id}`} className="btn btn-danger">Delete</Link>

                        </td>
                    
                    </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}

