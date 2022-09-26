import React, { useState } from 'react'
import { UserForm } from './UserForm'
import { useDispatch } from 'react-redux'
import { createUserAction, updateUserAction } from '../Store/usersSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

import(createUserAction)
export const Edit = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userInfo = useParams();
    const [user, setuser] = useState({
        "albumId": "",
        "id": "",
        "title": "",
        "url": "",
        "thumbnailurl": "",
       
    })
    const btnTxt = "Update User"
    const handleUpdate = () => {
        dispatch(updateUserAction(user))
        navigate("/")
    }
    const handleChange = (e) => {
        let newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setuser(newUser)
    }
    useEffect(() => {
        const allUsers = JSON.parse(localStorage.getItem("users"))
        const newUser = allUsers.find((myUser) => myUser.id == userInfo.id)
        setuser(newUser)
    }, [])
    return (
        <div className='container'>
            <UserForm btnTxt={btnTxt} user={user} handleEvent={handleUpdate} handleChangeEvent={handleChange} />
        </div>
    )
}
