import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom';
import { ProductForm } from './ProductForm';
import {  updateProducts } from '../Store/ProductsSlice';
import { useEffect } from 'react';

export const Edit = () => {
    const btnTxt = "Update";
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const objUrl =useParams()
    const [prod, setprod] = useState({
        id:"",
        title:"",
        price:"",
        image:""
    })

     const handlechangeEvent=(e)=>{
        let newprod = {...prod}
        newprod[e.target.name] = e.target.value
        setprod(newprod)
    }

    const handleEvent=()=>{
        dispatch(updateProducts(prod,{dispatch}))
        navigate('/')
    }

    useEffect(()=>{
        const newprod = JSON.parse(localStorage.getItem("FillProducts"))
        const setnew = newprod.find((myprod)=> myprod.id == objUrl.id)
        setprod(setnew)
    },[])

  return (
    <div>Create
        <ProductForm btnTxt={btnTxt} prod={prod} handlechangeEvent={handlechangeEvent} handleEvent={handleEvent} />
    </div>
  )
}
