import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateProductAction } from '../store/productsSlice';
import { UserForm } from './UserForm'

export const Edit = () => {
    const btnText =" Update product";
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const productInfo = useParams();

    const [product, setproduct] = useState({
        id:"",
        title:"",
        price:"",
        description:"",
        category:""
    })

    const handleUpdate=()=>{
        dispatch(updateProductAction(product));
        navigate("/")
    };
    const handleChange=(e)=>{
        let newProduct = {...product};
        newProduct[e.target.name] = e.target.value;
        setproduct(newProduct)
    };
    useEffect(()=>{
            const allProducts = JSON.parse(localStorage.getItem("products"))
            const newProduct = allProducts.find((myProduct)=>myProduct.id == productInfo.id);
            setproduct(newProduct);
    },[])// [] we are asking to execute only one time
  return (
    <div className="container">
            <UserForm btnText={btnText} product={product} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}
