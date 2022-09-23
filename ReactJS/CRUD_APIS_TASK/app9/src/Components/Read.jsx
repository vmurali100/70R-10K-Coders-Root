import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


export const Read = () => {
    let url="http://localhost:4010/college/"
  const [college, setcollege] = useState([])
  useEffect(()=>{
    axios.get(url).then((res)=>{
        localStorage.setItem("Colleges", JSON.stringify(res.data))
        setcollege(res.data)
    })
})
  return (
    <div className='container'>

        <table class="table table-success table-striped">

            <thead>
                <tr>
                <th>ID</th>
                <th>University</th>
                <th>Institute</th>
                <th>Branch</th>
                <th>Degree</th>
                <th>Experience</th>
                <th>Yourwebsiteorblog</th>
                <th>Details</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {college.map((ZZ,i)=>{
                    return <tr key = {i}>
                        
                <td>{ZZ.id}</td>
                <td>{ZZ.university}</td>
                <td>{ZZ.institute}</td>
                <td>{ZZ.branch}</td>
                <td>{ZZ.degree}</td>
                <td>{ZZ.experience}</td>
                <td>{ZZ.yourwebsiteorblog}</td> 

                        



                        <td>
                        <Link to={`/details/${ZZ.id}`} className="btn btn-info">Details</Link>

                        </td>

                        <td>
                        <Link to={`/edit/${ZZ.id}`} className="btn btn-warning">Edit</Link>
                        </td>

                        <td>

                        <Link to={`/delete/${ZZ.id}`} className="btn btn-danger">Delete</Link>

                        </td>
                    
                    </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}




