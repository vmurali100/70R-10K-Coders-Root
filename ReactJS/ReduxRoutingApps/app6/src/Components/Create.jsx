import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UsersForm } from './UsersForm';

export const Create = () => {
  let url='http://localhost:3210/Users';
  const btnTxt = "Add";
  const navigate = useNavigate();
  const info = JSON.parse(localStorage.getItem('ReactUsers'))
  const objurl = useParams()

  const [user, setuser] = useState({
    id:"",
    name:"",
    username:"",
    email:"",
  })

  const handleChange=(e)=>{
    let newuser = {...user}
    newuser[e.target.name]= e.target.value;
    setuser(newuser)
  }

  const handleEvent=()=>{
    axios.post(url,user).then(()=>{
      navigate('/')
    })
  }
  return (
    <div>
      <UsersForm btntxt={btnTxt} user={user} handleEvent={handleEvent} handleChange={handleChange}/>
    </div>
  )
}
