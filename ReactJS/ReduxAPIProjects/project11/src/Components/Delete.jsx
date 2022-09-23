import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate,useParams } from "react-router-dom";
import { deleteCartAction } from '../store/cartsSlice';



export const Delete = () => {
    const dispatch=useDispatch()
    const navigate= useNavigate()
     const cart=useParams()//used to read data


    const deleteCart=()=>{
            dispatch(deleteCartAction(cart))
                    navigate("/")



    }
    const handleCancel=()=>{
        navigate("/")


    }
  return (
    <div className='container' style={{textAlign:"center",marginTop:'40px'}}>
        <p style={{color:"red"} }>Are you sure.... you want to Delete the Cart?</p>
        <button className='btn btn-danger'onClick={deleteCart}>Delete Cart</button>
        <button className='btn btn-primary' style={{marginLeft:'30px'}} onClick={handleCancel}> Cancel</button>

    </div>
  )
}
