import React,{useState} from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Form } from './Form'
import { updateCartAction } from '../Store/slice'



export const Edit = () => {

    const navigate = useNavigate()
    const objUrl = useParams()
    const dispatch = useDispatch()
    const btnText = "UPDATE"

    const [cart, setCart] = useState({
        id:"",
        userId:"",
        date:"",
        products : {
            productId:"",
            quantity:""
        }
    })

    const handleChange = (e) => {
        let newCart = { ...cart }
        newCart[e.target.name] = e.target.value
        setCart(newCart)
    }

    useEffect(() => {
        const info = JSON.parse(localStorage.getItem("carts"))
        const result = info.find((item) => item.id == objUrl.id)
        setCart(result)
    }, [])

    const handleEdit=()=>{
        dispatch(updateCartAction(cart))
        navigate("/")
    }


    return (
        <Form btnText={btnText} cart={cart} handleEvent={handleEdit} handleChangeEvent={handleChange} />
    )
}
