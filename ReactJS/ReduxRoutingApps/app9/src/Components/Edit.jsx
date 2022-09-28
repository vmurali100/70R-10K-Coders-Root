import React,{useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import {UsersForm} from './UsersForm'

export const Edit = () => {
  const btnTxt='Update';
  let url="http://localhost:3306/Users/";
  const navigate=useNavigate()
  const param=useParams();

  const info=JSON.parse(localStorage.getItem('UsersReact')) 
  const user=info.find((myuser)=>myuser.id == param.id)
  const [newuser, setnewuser] = useState(user)

  const handleChange=(e)=>{
    let nwuser={...newuser};
    nwuser[e.target.name] = e.target.value;
    setnewuser(nwuser)
  }
  const handleEvent=()=>{
    axios.put(url+param.id,newuser).then(()=>{
      navigate('/')
    })
  }
  return (
    <div>
      <UsersForm btnTxt={btnTxt} user={newuser} handleChange={handleChange} handleEvent={handleEvent} />
    </div>
  )
}
