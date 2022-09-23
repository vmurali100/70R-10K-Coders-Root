import React,{useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {  updateCartAction } from '../store/cartsSlice';
import { useEffect } from 'react';
import { UserForm } from './UserForm'



export const Edit = () => {
    const btnText ="Update Cart"
    const [cart, setcart] = useState({"id": "",
    "name": "",
    "username": "",
    "email": "",
    "password": "",
    "message": "",
    "confirmpassword": ""
   })
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const cartInfo=useParams()
    const handleUpdate=()=>{
        dispatch(updateCartAction(cart))
        navigate("/")

        
    }
    const handleChange=(e)=>{//for giving inputs
        let newCarts={...cart}
        newCarts[e.target.name]=e.target.value
        setcart(newCarts)

    }
    useEffect(()=>{
        const allCarts = JSON.parse(localStorage.getItem("carts"))
        const newCart=allCarts.find((myCart)=>myCart.id==cartInfo.id);
        setcart(newCart)

    },[])//[] it executes one time
  return (
    <div className='container'>
        <UserForm  btnText={btnText} cart={cart} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}

