
import React, { useEffect,useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export const Read = () => {
    const [user, setuser] = useState([])

    let url= "http://localhost:4003/posts"
    const navigate =useNavigate();


    useEffect(()=>{
        axios.get(url).then((res)=>{
            localStorage.setItem("users", JSON.stringify(res.data))
            setuser(res.data)
        })
    },[])
    const addStudent =()=>{
        navigate("/create")
    }
  return (
    <div className='container'>
                <button type='button' className='btn btn-primary' onClick={addStudent} >Add Student</button>

        <table class="table table-dark table-striped">

            <thead>
                <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {user.map((KP,i)=>{
                    return <tr key = {i}>
                        <td>{KP.id}</td>
                        <td>{KP.title}</td>
                        <td>{KP.body}</td>
                        <td>
                        <Link to={`/details/${KP.id}`} className="btn btn-success">Details</Link>

                        </td>

                        <td>
                        <Link to={`/edit/${KP.id}`} className="btn btn-warning">Edit</Link>
                        </td>

                        <td>

                        <Link to={`/delete/${KP.id}`} className="btn btn-danger">Delete</Link>

                        </td>
                    
                    </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}


