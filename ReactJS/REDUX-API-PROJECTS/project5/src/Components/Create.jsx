import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createProductAction } from '../store/productsSlice'
import { UserForm } from './UserForm'

export const Create = () => {
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const [product, setproduct] = useState({
        id:"",
        title:"",
        price:"",
        description:"",
        category:""
    })
    const btnText = "Add product Detail"

    const handleCreate=()=>{
        dispatch(createProductAction(product))
        navigate('/')
    }
    const handleChange=(e)=>{
        let newProduct = {...product};
        newProduct[e.target.name] = e.target.value;
        setproduct(newProduct)
    }
    return (
        <div className="container">
            <UserForm btnText={btnText} product={product} handleEvent={handleCreate} handleChangeEvent={handleChange}/>

        </div>

    )
}