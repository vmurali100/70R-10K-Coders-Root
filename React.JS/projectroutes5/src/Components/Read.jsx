import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Read = () => {

    let url = "http://localhost:3202/comments"

    const [comments, setcomments] = useState([])

    useEffect(()=>{
        axios.get(url).then((response)=>{
            localStorage.setItem("comments",JSON.stringify(response.data))
            setcomments(response.data);
        })
    },[])
   

  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Post ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Body</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
               {comments.map((comm,i)=>{
                return <tr key={i}>
                            <td>{comm.id}</td>
                            <td>{comm.postId}</td>
                            <td>{comm.name}</td>
                            <td>{comm.email}</td>
                            <td>{comm.body}</td>
                            <td>
                                <Link to={`/Edit/${comm.id}`} className='btn btn-warning'>Edit</Link>
                            </td>
                            <td>
                            <Link to={`/Delete/${comm.id}`} className='btn btn-danger'>Delete</Link>
                            </td>
                            <td>
                            <Link to={`/Details/${comm.id}`} className='btn btn-primary'>Details</Link>
                            </td>
                </tr>
               })}
            </tbody>
        </table>
    </div>
  )
}
