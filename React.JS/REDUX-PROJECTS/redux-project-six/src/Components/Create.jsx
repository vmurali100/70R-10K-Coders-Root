import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form } from './Form';
import { addAlbumAction } from '../Store/Slice';

export const Create = () => {

    const [albums, setalbums] = useState({
        id:"",
        userId:"",
        title : ""
    });

    const btnText = "ADD ALBUM"
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        let newAlbums = {...albums}
        newAlbums[e.target.name] = e.target.value
        setalbums(newAlbums)
    }

    const addAlbum=()=>{
        dispatch(addAlbumAction(albums))
        navigate("/")
    }


  return (
    <Form btnText={btnText} albums={albums} handleEvent={addAlbum} handleChangeEvent={handleChange} />
  )
}
