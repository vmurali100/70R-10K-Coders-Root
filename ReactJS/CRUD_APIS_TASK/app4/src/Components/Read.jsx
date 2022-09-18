import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


export const Read = () => {
    const [datauser, setdatauser] = useState([])
    let url ="http://localhost:4005/albums/"

    useEffect(()=>{
        axios.get(url).then((res)=>{
            localStorage.setItem("datausers", JSON.stringify(res.data))
            setdatauser(res.data)
        })
    })
    return (
        <div className='container'>
    
            <table class="table table-success table-striped">
    
                <thead>
                    <tr>
                <th>ID</th>
                <th>UserId</th>
                <th>Title</th>
                <th>Details</th>
                <th>Edit</th>
                <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {datauser.map((AA,i)=>{
                        return <tr key = {i}>
                            <td>{AA.id}</td>
                            <td>{AA.userId}</td>
                            <td>{AA.title}</td>
                            <td>
                            <Link to={`/details/${AA.id}`} className="btn btn-info">Details</Link>
    
                            </td>
    
                            <td>
                            <Link to={`/edit/${AA.id}`} className="btn btn-warning">Edit</Link>
                            </td>
    
                            <td>
    
                            <Link to={`/delete/${AA.id}`} className="btn btn-danger">Delete</Link>
    
                            </td>
                        
                        </tr>
                    })}
                </tbody>
            </table>
    
        </div>
      )
    }
    
    
    
