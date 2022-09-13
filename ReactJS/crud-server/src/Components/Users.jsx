import React,{useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const Users = () => {
    let url="http://localhost:3000/users";
    const [seasons, setseasons] = useState([])
    useEffect(()=>{
        axios.get(url).then((res)=>{
            console.log(res.data);
            setseasons(res.data);
        })
    },[url])
  return (
    <div>
        <h2>Seasons </h2>
        <ul>
            {seasons.map((season,i)=>{
                return <li key={i}>{season}</li>
            })}
        </ul>
    </div>
  )
}
