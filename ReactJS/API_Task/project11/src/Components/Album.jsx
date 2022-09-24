import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


export const Album = () => {
    let url="http://localhost:3011/albums/"

  const [album, setalbum] = useState([

  ])
  useEffect(()=>{
    axios.get(url).then((res)=>{
        localStorage.setItem("users", JSON.stringify(res.data))
        setalbum(res.data)
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
                {album.map((YY,i)=>{
                    return <tr key = {i}>
                        
                <td>{YY.id}</td>
                <td>{YY.userId}</td>
                <td>{YY.title}</td>
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

