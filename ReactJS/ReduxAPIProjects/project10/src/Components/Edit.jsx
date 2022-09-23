import React,{useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {  updateProductAction } from '../store/productsSlice';
import { useEffect } from 'react';
import { UserForm } from './UserForm'



export const Edit = () => {
    const btnText ="Update Product"
    const [product, setproduct] = useState({"id":"" ,
    "title": "",
    "price": "",
    "description": "",
    "category": "",
    })
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const productInfo=useParams()
    const handleUpdate=()=>{
        dispatch(updateProductAction(product))
        navigate("/")

        
    }
    const handleChange=(e)=>{//for giving inputs
        let newProducts={...product}
        newProducts[e.target.name]=e.target.value
        setproduct(newProducts)

    }
    useEffect(()=>{
        const allProducts = JSON.parse(localStorage.getItem("products"))
        const newProduct=allProducts.find((myProduct)=>myProduct.id==productInfo.id);
        setproduct(newProduct)

    },[])//[] it executes one time
  return (
    <div className='container'>
        <UserForm  btnText={btnText} product={product} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}

