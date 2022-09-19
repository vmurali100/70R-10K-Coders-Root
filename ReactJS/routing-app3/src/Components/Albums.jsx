import React,{useState} from 'react'
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

export const Albums = () => {
  let url="http://localhost:3300/Albums";
  const [albums, setalbums] = useState([]);
  useEffect(()=>{
    axios.get(url).then((res)=>{
      localStorage.setItem("Albums",JSON.stringify(res.data));
      setalbums(res.data);
    })
  })
 
  return (
    <div className='displaycontainer'>
      <><Link to="/" className="btn btn-primary">Home</Link>
      <p>List Of Available albums in the server</p></>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>UserID</th>
            <th>Id</th>
            <th>Title</th>
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album,i)=>{
            return <tr key={i}>
              <td>{album.userId}</td>
              <td>{album.id}</td>
              <td>{album.title}</td>
              <td><Link to={`/albums/${album.id}`} className="btn btn-primary">Details</Link></td>
              <td><Link to={`/editalbum/${album.id}`} className="btn btn-primary">Edit</Link></td>
              <td><Link to={`/deletealbum/${album.id}`} className="btn btn-primary">Delete</Link></td>

            </tr>
          })}
        </tbody>
      </table>

    </div>
  )
}
