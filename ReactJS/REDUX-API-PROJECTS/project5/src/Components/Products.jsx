import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { getAllProducts } from '../store/productsSlice';

export const Products = () => {
   const productsDetails =  useSelector((state)=>state.products);

   console.log(productsDetails.products)

   
   localStorage.setItem('products',JSON.stringify(productsDetails.products))
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const getproducts=()=>{
    dispatch(getAllProducts());
   }
   
   useEffect(()=>{
        getproducts()
   },[])
   const handleDelete = (product) => {
    navigate(`delete/${product.id}`)
    // dispatch(deleteUser(product))
}

const handleEdit = (product) => {
    navigate(`edit/${product.id}`)
}
  return (
    <div className='container'>

        {/* <button onClick={getproducts} className= 'btn btn-primary'>Get product</button> */}

        <table className="table table-success table-striped">
            <thead>
                <tr>
                    <th >ID</th>
                    <th >Title</th>
                    <th >Price</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {productsDetails.products.map((product, i) => (
                    <tr key={i}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>{product.category}</td>

                        <td><button className='btn btn-warning' onClick={() => { handleEdit(product) }}>Edit</button></td>
                        <td><button className='btn btn-danger' onClick={() => { handleDelete(product) }}>Delete</button></td>
                    </tr>))}
            </tbody>
        </table>
        
    </div>
  )
}
