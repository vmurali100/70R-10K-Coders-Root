import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const DisplayPhotos = () => {
    const [photos, setphotos] = useState([])
    let url = "http://localhost:3201/photos"
    useEffect(()=>{
         axios.get(url).then((response)=>{
            localStorage.setItem("photos",JSON.stringify(response.data))
            setphotos(response.data)
         })
    },[])
  return (
    <div className='container'>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Url</th>
            <th>thumbnailurl</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {photos.map((photo,i)=>{
            return <tr key={i}>
              <td>{photo.id}</td>
              <td>{photo.title}</td>
              <td>{photo.url}</td>
              <td>{photo.thumbnailUrl}</td>
              <td>
                <Link to={`/EditPhoto/${photo.id}`} className="btn btn-warning" >Edit</Link>
              </td>
              <td>
                <Link to={`/DeletePhoto/${photo.id}`} className="btn btn-danger" >Delete</Link>
              </td>
              <td>
                <Link to={`/Details/${photo.id}`} className="btn btn-primary" >Details</Link>
              </td>
            </tr>
          })}
        </tbody>
      </table>

    </div>
  )
}
