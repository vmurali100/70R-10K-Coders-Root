import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form } from './Form';
import { addCartAction } from '../Store/slice';

export const Create = () => {

    const [cart, setCart] = useState({
      id:"",
      userId:"",
      date:"",
      products : {
          productId:"",
          quantity:""
      }
    });

    const btnText = "ADD DATA"
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        let newCart = {...cart}
        newCart[e.target.name] = e.target.value
        setCart(newCart)
    }

    const addCart=()=>{
        dispatch(addCartAction(cart))
        navigate("/")
    }


  return (
    <Form btnText={btnText} cart={cart} handleEvent={addCart} handleChangeEvent={handleChange} />
  )
}
