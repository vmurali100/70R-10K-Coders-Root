import React from 'react'
import { UserForm } from './UserForm'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUserAction } from '../Store/usersSlice'
import { useNavigate } from 'react-router-dom'
export const Create = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setuser] = useState({
        "id": "",
        "fname": "",
        "lname": "",
        
    })
    const btnTxt = "Add User"
    const handleCreate = () => {
        dispatch(createUserAction(user))
        navigate("/")
    }
    const handleChange = (e) => {
        let newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setuser(newUser)
    }
    return (

        <div className='container'>
            <UserForm btnTxt={btnTxt} user={user} handleEvent={handleCreate} handleChangeEvent={handleChange} />
        </div>

    )
}
