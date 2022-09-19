import React from 'react'
import { useEffect,useState } from 'react';
import {Link,useParams} from 'react-router-dom';
import axios from 'axios';

export const TodoDetails = () => {
  let url = "http://localhost:3207/Todos/";
  let objurl = useParams();

  // let info = JSON.parse(localStorage.getItem("Todos"));
  // let details = info.find((todo)=> todo.id == objurl.id);

  const [todoDetail, settodoDetail] = useState({})
  
  useEffect(()=>{
    axios.get(url).then((res)=>{
      let info = JSON.parse(localStorage.getItem("Todos"));
      let details = info.find((todo)=> todo.id == objurl.id);
      settodoDetail(details);
    })
  })
  return (
    <div>PhotoDetails
    <div className="Pcontainer">
    <div className="card" >

<div className="card-body">
  <h5 className="card-title">Details -{todoDetail.userId}</h5>
  <p className="card-text">{todoDetail.id}</p>
  <p className="card-text">{todoDetail.title}</p>
  <p className="card-text">{todoDetail.completed}</p>
  {/* <a href="#" className="btn btn-primary">Go Back</a> */}
  <Link  to="/" className="btn btn-primary">Go Back</Link>
</div>
</div>
    </div>
  </div>
  )
}
