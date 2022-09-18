import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


export const Read = () => {
  let url="http://localhost:4006/photos/"
  const [photo, setphoto] = useState([])
  useEffect(()=>{
    axios.get(url).then((res)=>{
        localStorage.setItem("photos", JSON.stringify(res.data))
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
            <th>Url</th>
            <th>ThumbnailUrl</th>
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {photo.map((BB,i)=>{
                    return <tr key = {i}>
                        <td>{BB.id}</td>
                        <td>{BB.albumId}</td>
                        <td>{BB.title}</td>
                        <td>{BB.url}</td>
                        <td>{BB.thumbnailUrl}</td>


                        <td>
                        <Link to={`/details/${BB.id}`} className="btn btn-info">Details</Link>

                        </td>

                        <td>
                        <Link to={`/edit/${BB.id}`} className="btn btn-warning">Edit</Link>
                        </td>

                        <td>

                        <Link to={`/delete/${BB.id}`} className="btn btn-danger">Delete</Link>

                        </td>
                    
                    </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}




