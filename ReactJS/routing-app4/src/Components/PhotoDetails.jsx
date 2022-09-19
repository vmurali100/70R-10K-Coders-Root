import React,{useState} from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import {useParams,Link} from 'react-router-dom'

export const PhotoDetails = () => {
  let Url= "http://localhost:3306/Photos";
  const [details, setdetails] = useState({});
  const objurl = useParams();
  useEffect(()=>{
    axios.get(Url).then((res)=>{
     const info = JSON.parse( localStorage.getItem("Photos"));
     const sldetails = info.find((details)=>details.id == objurl.id);
     setdetails(sldetails);
    })
  })
  return (
    <div>PhotoDetails
      <div className="Pcontainer">
      <div className="card" >
  
  <div className="card-body">
    <h5 className="card-title">Comment Detail of CommentId -{details.albumId}</h5>
    <p className="card-text">{details.id}</p>
    <p className="card-text">{details.title}</p>
    <p className="card-text">{details.url}</p>
    <p className="card-text">{details.thumbnailUrl}</p>
    {/* <a href="#" className="btn btn-primary">Go Back</a> */}
    <Link  to="/photos" className="btn btn-primary">Go Back</Link>
  </div>
</div>
      </div>
    </div>
  )
}
