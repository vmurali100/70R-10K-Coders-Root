import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createNoteAction } from '../store/notesSlice'
import { UserForm } from './UserForm'

export const Create = () => {
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const [note, setnote] = useState({
        id:"",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:""
    })
    const btnText = "Add note Detail"

    const handleCreate=()=>{
        dispatch(createNoteAction(note))
        navigate('/')
    }
    const handleChange=(e)=>{
        let newNote = {...note};
        newNote[e.target.name] = e.target.value;
        setnote(newNote)
    }
    return (
        <div className="container">
            <UserForm btnText={btnText} note={note} handleEvent={handleCreate} handleChangeEvent={handleChange}/>

        </div>

    )
}