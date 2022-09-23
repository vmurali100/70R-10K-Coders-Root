import React,{useState} from 'react'
import { AlbumsForm } from './AlbumsForm'
import {useDispatch} from 'react-redux';
import {useNavigate,useParams} from 'react-router-dom';
import { updateAlbm } from '../Store/AlbumsSlice';
import { useEffect } from 'react';

export const Edit = () => {
    const btnTxt = "Update";
    const info = useParams()
    const [albm, setalbm] = useState({
        userId:"",
        id:"",
        title:"",
    })
const dispatch= useDispatch();
const navigate = useNavigate();

    const handleEvent =()=>{
        dispatch(updateAlbm(albm))
        navigate('/')
    }

    const handleChangeEvent=(e)=>{
        let newalbm= {...albm};
        newalbm[e.target.name] = e.target.value;
        setalbm(newalbm);
    }

    useEffect(()=>{
        const  allAlbums =JSON.parse( localStorage.getItem("ReduxAlbums"))
        const newAlbums = allAlbums.find((myAlbm)=>myAlbm.id == info.id)
        setalbm(newAlbums)
    },[])
  return (
    <div>
        <AlbumsForm btnTxt={btnTxt} albm={albm} handleChangeEvent={handleChangeEvent} handleEvent={handleEvent}/>
    </div>
  )
}
