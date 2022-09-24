import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


export const Photos = () => {
    let url="http://localhost:3010/photos/"

  const [photo, setphoto] = useState([

  ])
  useEffect(()=>{
    axios.get(url).then((res)=>{
        localStorage.setItem("users", JSON.stringify(res.data))
        setphoto(res.data)
    })
})
  return (
    <div className='container'>

        <table class="table table-success table-striped">

            <thead>
                <tr>
                <th>ID</th>
                <th>AlbumId</th>
                <th>Title</th>
                <th>URL</th>
                <th>ThumbnailURL</th>
                <th>Details</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {photo.map((YY,i)=>{
                    return <tr key = {i}>
                        
                <td>{YY.id}</td>
                <td>{YY.albumId}</td>
                <td>{YY.title}</td>
                <td>{YY.url}</td>
                <td>{YY.thumbnailUrl}</td>
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

