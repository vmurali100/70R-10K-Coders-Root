import React from 'react'
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'


export const Delete = () => {

    const objUrl = useParams();

    const navigate = useNavigate()

    let url = "http://localhost:3201/albums/"

    const deleteAlbum = () =>{
        axios.delete(url+objUrl.id).then(()=>{
            navigate("/")
        })
    };

    return (
        <div>
            <p> Are you sure to delete ?</p>
            <button className='btn btn-danger' type="button" onClick={deleteAlbum}>Delete</button>
        </div>
    )
}
