import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


export const Read = () => {
  let url="http://localhost:4007/users/"
  const [user, setuser] = useState([])
  useEffect(()=>{
    axios.get(url).then((res)=>{
        localStorage.setItem("Users", JSON.stringify(res.data))
        setuser(res.data)
    })
})
  return (
    <div className='container'>

        <table class="table table-success table-striped">

            <thead>
                <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Telephone</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zipcode</th>
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {user.map((CC,i)=>{
                    return <tr key = {i}>
                        
                        <td>{CC.id}</td>
                        <td>{CC.fname}</td>
                        <td>{CC.lname}</td>
                        <td>{CC.tel}</td>
                        <td>{CC.address}</td>
                        <td>{CC.city}</td>
                        <td>{CC.state}</td>
                        <td>{CC.zip}</td>




                        <td>
                        <Link to={`/details/${CC.id}`} className="btn btn-info">Details</Link>

                        </td>

                        <td>
                        <Link to={`/edit/${CC.id}`} className="btn btn-warning">Edit</Link>
                        </td>

                        <td>

                        <Link to={`/delete/${CC.id}`} className="btn btn-danger">Delete</Link>

                        </td>
                    
                    </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}




