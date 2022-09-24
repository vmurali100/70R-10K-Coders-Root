import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


export const Teacher = () => {
    let url="http://localhost:3012/main/"

  const [teacher, setteacher] = useState([

  ])
  useEffect(()=>{
    axios.get(url).then((res)=>{
        localStorage.setItem("users", JSON.stringify(res.data))
        setteacher(res.data)
    })
})
  return (
    <div className='container'>

        <table class="table table-success table-striped">

            <thead>
                <tr>
                <th>ID</th>
                <th>Fname</th>
                <th>Lname</th>
                <th>City</th>
                <th>Details</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {teacher.map((YY,i)=>{
                    return <tr key = {i}>
                        
                <td>{YY.id}</td>
                <td>{YY.fname}</td>
                <td>{YY.lname}</td>
                <td>{YY.city}</td>

                    <td>
                        <Link to={`/details/${YY.id}`} className="btn btn-info">Details</Link>
                    </td>

                    <td>
                    <Link to={`/edit/${YY.id}`} className="btn btn-warning">Edit</Link>
                    </td>

                    <td>

                    <Link to={`/delete/${YY.id}`} className="btn btn-danger">Delete</Link>

                    </td>
                    
                    </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}

