import React,{useState} from 'react'
import { UserForm } from './UserForm'
import { useSelector, useDispatch } from 'react-redux'
import { createUser } from '../Store/UsersSlice';
import {useNavigate} from 'react-router-dom';

export const Create = () => {
    const btnTxt = "Add";
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setuser] = useState({
        id:"",
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    })

    const handleChangeEvent=(e)=>{
        let newUser= {...user}
        newUser[e.target.name]= e.target.value;
        setuser(newUser)
    }

    const handleEvent=()=>{
        dispatch(createUser(user))
        navigate('/')
    }

  return (
    <div>
        <UserForm btnTxt={btnTxt} user={user} handleChangeEvent={handleChangeEvent} handleEvent={handleEvent}/>
    </div>
  )
}
