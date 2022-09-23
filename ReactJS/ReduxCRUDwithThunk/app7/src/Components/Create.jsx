import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom';
import { ProductForm } from './ProductForm';
import { createProducts } from '../Store/ProductsSlice';

export const Create = () => {
    const btnTxt = "Add";
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
        dispatch(createProducts(prod,{dispatch}))
        navigate('/')
    }

  return (
    <div>Create
        <ProductForm btnTxt={btnTxt} prod={prod} handlechangeEvent={handlechangeEvent} handleEvent={handleEvent} />
    </div>
  )
}
