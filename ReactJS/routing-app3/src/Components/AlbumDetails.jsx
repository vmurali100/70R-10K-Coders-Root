import React,{useState} from 'react'
import { useEffect } from 'react';
import {json, useParams,Link} from 'react-router-dom'


export const AlbumDetails = () => {
    const [album, setalbum] = useState({});
    const objurl = useParams();
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("Albums"));
        const sltdAlbm = data.find((album)=> album.id == objurl.id);
        setalbum(sltdAlbm);
    },[])
  return (
    <div>AlbumDetails
      <div className="cardcontainer">
      <div className="card" >
  
  <div className="card-body">
    <h5 className="card-title">Comment Detail of CommentId -{album.id}</h5>
    <p className="card-text">{album.postId}</p>
    <p className="card-text">{album.id}</p>
    <p className="card-text">{album.title}</p>
    {/* <a href="#" className="btn btn-primary">Go Back</a> */}
    <Link  to="/albums" className="btn btn-primary">Go Back</Link>
  </div>
</div>
      </div>
    </div>
  )
}
