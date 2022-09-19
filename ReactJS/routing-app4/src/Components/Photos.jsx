import React,{useState} from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export const Photos = () => {
  let url="http://localhost:3306/Photos";
  const [photos, setphotos] = useState([]);
  useEffect(()=>{
    axios.get(url).then((res)=>{
      localStorage.setItem("Photos",JSON.stringify(res.data));
      setphotos(res.data);
    })
  },[])
  return (
    <div className='listcontainer'>
      <Link to={"/"} className='btn btn-primary'>Go Back</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>AlbumId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {photos.map((photo,i)=> <tr key={i}>
            <td>{photo.albumId}</td>
            <td>{photo.id}</td>
            <td>{photo.title}</td>
            <td><Link to={`/photodetails/${photo.id}`} className="btn btn-success">Details</Link></td>
            <td><Link to={`/editphotos/${photo.id}`} className="btn btn-primary">Edit</Link></td>
            <td><Link to={`/deletephotos/${photo.id}`} className="btn btn-danger">Delete</Link></td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}
