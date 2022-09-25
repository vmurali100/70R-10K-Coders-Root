import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createwinAction } from '../store/winsSlice'
import { Userform } from './Userform'

export const Create = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const [win, setwin] = useState({
        userid:"",
        id: "", 
        title: "",
        completed: ""
    })
    const btnText = "Add"

    const handlecreate = () => {
        dispatch(createwinAction(win))
        navigate("/")
    }

    const handlechange = (e) => {
        let newwins = { ...win }
        newwins[e.target.name] = e.target.value
        setwin(newwins)
    }
    return (
        <div>
            <Userform btnText={btnText} win={win} handleevent={handlecreate} handlechangeevent={handlechange} />
        </div>
    )
}
