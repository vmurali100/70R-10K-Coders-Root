import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { createUserAction } from '../store/usersSlice';
import { UserForm } from './UserForm'
import { useNavigate } from "react-router-dom";


export const Create = () => {
    const btnText ="Add User";
    const [user, setuser] = useState({id:"",email:"",username:"",password:""})
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const handleCreate=()=>{
        dispatch(createUserAction(user))
        navigate("/")

        
    }
    const handleChange=(e)=>{//for giving inputs
        let newUsers={...user}
        newUsers[e.target.name]=e.target.value
        setuser(newUsers)

    }

  return (    
    <div className="container">
        <UserForm btnText={btnText} user={user} handleEvent={handleCreate} handleChangeEvent={handleChange}/>
        
</div>

  )}
