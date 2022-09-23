import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate,useParams } from "react-router-dom";
import { deleteProductAction } from '../store/productsSlice';



export const Delete = () => {
    const dispatch=useDispatch()
    const navigate= useNavigate()
     const product=useParams()//used to read data


    const deleteProduct=()=>{
            dispatch(deleteProductAction(product))
                    navigate("/")



    }
    const handleCancel=()=>{
        navigate("/")


    }
  return (
    <div className='container' style={{textAlign:"center",marginTop:'40px'}}>
        <p style={{color:"red"} }>Are you sure.... you want to Delete the Product?</p>
        <button className='btn btn-danger'onClick={deleteProduct}>Delete Product</button>
        <button className='btn btn-primary' style={{marginLeft:'30px'}} onClick={handleCancel}> Cancel</button>

    </div>
  )
}
