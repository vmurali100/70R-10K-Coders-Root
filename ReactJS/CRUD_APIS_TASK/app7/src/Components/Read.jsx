import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


export const Read = () => {
  let url="http://localhost:4008/details/"
  const [detail, setdetail] = useState([])
  useEffect(()=>{
    axios.get(url).then((res)=>{
        localStorage.setItem("Details", JSON.stringify(res.data))
        setdetail(res.data)
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
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {detail.map((CC,i)=>{
                    return <tr key = {i}>
                        
                        <td>{CC.id}</td>
                        <td>{CC.fname}</td>
                        <td>{CC.lname}</td>
                        



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




