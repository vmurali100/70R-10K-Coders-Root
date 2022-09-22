import React,{useState} from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Form } from './Form'
import { updateProductsAction } from '../Store/slice'



export const Edit = () => {

    const navigate = useNavigate()
    const objUrl = useParams()
    const dispatch = useDispatch()
    const btnText = "UPDATE"

    const [product, setproduct] = useState({})

    const handleChange = (e) => {
        let newproduct = { ...product }
        newproduct[e.target.name] = e.target.value
        setproduct(newproduct)
    }

    useEffect(() => {
        const info = JSON.parse(localStorage.getItem("products"))
        const result = info.find((item) => item.id == objUrl.id)
        setproduct(result)
    }, [])

    const handleEdit=()=>{
        dispatch(updateProductsAction(product))
        navigate("/")
    }


    return (
        <Form btnText={btnText} product={product} handleEvent={handleEdit} handleChangeEvent={handleChange} />
    )
}
