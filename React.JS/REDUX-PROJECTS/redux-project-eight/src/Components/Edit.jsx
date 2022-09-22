import React,{useState} from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Form } from './Form'
import { updateFilltextAction } from '../Store/slice'



export const Edit = () => {

    const navigate = useNavigate()
    const objUrl = useParams()
    const dispatch = useDispatch()
    const btnText = "UPDATE"

    const [filltext, setfilltext] = useState({})

    const handleChange = (e) => {
        let newFilltext = { ...filltext }
        newFilltext[e.target.name] = e.target.value
        setfilltext(newFilltext)
    }

    useEffect(() => {
        const info = JSON.parse(localStorage.getItem("filltexttwo"))
        const result = info.find((item) => item.id == objUrl.id)
        setfilltext(result)
    }, [])

    const handleEdit=()=>{
        dispatch(updateFilltextAction(filltext))
        navigate("/")
    }


    return (
        <Form btnText={btnText} filltext={filltext} handleEvent={handleEdit} handleChangeEvent={handleChange} />
    )
}
