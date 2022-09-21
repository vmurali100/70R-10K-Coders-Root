import React,{useState} from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Form } from './Form'
import { updateAlbumAction } from '../Store/Slice'



export const Edit = () => {

    const navigate = useNavigate()
    const objUrl = useParams()
    const dispatch = useDispatch()
    const btnText = "UPDATE"

    const [albums, setalbums] = useState({})

    const handleChange = (e) => {
        let newAlbums = { ...albums }
        newAlbums[e.target.name] = e.target.value
        setalbums(newAlbums)
    }

    useEffect(() => {
        const info = JSON.parse(localStorage.getItem("albums"))
        const result = info.find((item) => item.id == objUrl.id)
        setalbums(result)
    }, [])

    const handleEdit=()=>{
        dispatch(updateAlbumAction(albums))
        navigate("/")
    }


    return (
        <Form btnText={btnText} albums={albums} handleEvent={handleEdit} handleChangeEvent={handleChange} />
    )
}
