import React,{useState} from 'react'
import { UsersForm } from './UsersForm'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';

export const Edit = () => {
  const btntxt = "Update"
  let url='http://localhost:3210/Users/';
  const objurl = useParams();
  const navigate =useNavigate();
  const info = JSON.parse(localStorage.getItem('ReactUsers')) 
  const slcteduser = info.find((usr)=> usr.id == objurl.id)

  const [newslcted, setnewslcted] = useState(slcteduser);

  const handleChange=(e)=>{
    let newslctduser = {...newslcted}
    newslctduser[e.target.name] = e.target.value;
    setnewslcted(newslctduser)

  }
  const handleEvent=()=>{
    axios.put(url+objurl.id,newslcted).then(()=>{
      navigate('/')
    })
  }

  return (
    <div>
      <UsersForm btntxt={btntxt} handleChange={handleChange} user={newslcted} handleEvent={handleEvent}/>
    </div>
  )
}
