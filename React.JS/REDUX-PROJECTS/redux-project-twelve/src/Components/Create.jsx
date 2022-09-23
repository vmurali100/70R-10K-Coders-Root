import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUserAction } from '../Store/slice';
import { Form } from './Form';

export const Create = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const btnText = "ADD USER"

    const [user, setuser] = useState({
        id:"",
        email:"",
        username:"",
        password:"",
        phone:""
    });

    const handleChange=(e)=>{
        let newUser = {...user}
        newUser[e.target.name] = e.target.value;
        setuser(newUser);
    }

    const addUser=()=>{
        dispatch(createUserAction(user))
        navigate("/")
    }


   return (
    <Form btnText={btnText} user={user} handleEvent={addUser} handleChangeEvent={handleChange}  />
  )
}
