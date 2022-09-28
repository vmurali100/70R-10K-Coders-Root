import { React, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { UsersForm } from './UsersForm';

export const Create = () => {
    let btnTxt="Add";
    const [user, setuser] = useState({
        id: "",
        email: "",
        username: "",
        password:"",
        name: {
            firstname: "",
            lastname: ""
        }

    });

    let url = "http://localhost:3306/Users"

    const navigate = useNavigate()

    const handleChange = e => {
        let newuser = { ...user };
        newuser[e.target.name] = e.target.value;
        setuser(newuser)
    }

    const handleEvent = () => {
        axios.post(url, user).then(() => {
            console.log("Data added successfully")
            navigate('/')
        })

    }
    return (
        <div>
           <UsersForm btnTxt={btnTxt} user={user} handleChange={handleChange} handleEvent={handleEvent} />
        </div>
    )
}