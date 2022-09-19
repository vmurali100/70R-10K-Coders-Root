import axios from 'axios';
import React,{useState} from 'react'
import { useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';

export const MarkDetails = () => {
    const [markObj, setmarkObj] = useState({});
    const urlObj= useParams();
    const url="http://localhost:3203/marks/";
    useEffect(()=>{
        axios.get(`${url+urlObj.id}`).then((res)=>{
            // console.log(res.data);
            setmarkObj(res.data);
        })
    })
    
  return (
    <div>
        <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{markObj.name}</h5>
    <p className="card-text">{markObj.id}</p>
    <p className="card-text">{markObj.name}</p>
    <p className="card-text">{markObj.email}</p>
    <p className="card-text">{markObj.marks}</p>
   <Link to='/marks' className='btn btn-primary'>Go Back</Link>
  </div>
</div>
    </div>
  )
}
