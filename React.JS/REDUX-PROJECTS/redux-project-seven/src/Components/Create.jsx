import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form } from './Form';
import { addFilltextAction } from '../Store/slice';

export const Create = () => {

    const [filltext, setfilltext] = useState({
        id:"",
        fname:"",
        lname : ""
    });

    const btnText = "ADD DATA"
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        let newFilltext = {...filltext}
        newFilltext[e.target.name] = e.target.value
        setfilltext(newFilltext)
    }

    const addFilltext=()=>{
        dispatch(addFilltextAction(filltext))
        navigate("/")
    }


  return (
    <Form btnText={btnText} filltext={filltext} handleEvent={addFilltext} handleChangeEvent={handleChange} />
  )
}
