import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form } from './Form';
import { addProductsAction } from '../Store/slice';

export const Create = () => {

    const [product, setProduct] = useState({
      id:"",
      title:"",
      price:"",
      description:"",
      category:"",
      image:""
    });

    const btnText = "ADD DATA"
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        let newProduct = {...product}
        newProduct[e.target.name] = e.target.value
        setProduct(newProduct)
    }

    const addProduct=()=>{
        dispatch(addProductsAction(product))
        navigate("/")
    }


  return (
    <Form btnText={btnText} product={product} handleEvent={addProduct} handleChangeEvent={handleChange} />
  )
}
