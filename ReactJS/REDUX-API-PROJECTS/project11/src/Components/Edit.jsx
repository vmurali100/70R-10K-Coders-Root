import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateNoteAction } from '../store/notesSlice';
import { UserForm } from './UserForm'

export const Edit = () => {
    const btnText =" Update Note";
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const noteInfo = useParams();

    const [note, setnote] = useState({
        id:"",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:""

    })

    const handleUpdate=()=>{
        dispatch(updateNoteAction(note));
        navigate("/")
    };
    const handleChange=(e)=>{
        let newNote = {...note};
        newNote[e.target.name] = e.target.value;
        setnote(newNote)
    };
    useEffect(()=>{
            const allNotes = JSON.parse(localStorage.getNote("notes"))
            const newNote = allNotes.find((mynote)=>mynote.id == noteInfo.id);
            setnote(newNote);
    },[])// [] we are asking to execute only one time
  return (
    <div className="container">
            <UserForm btnText={btnText} note={note} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}
