import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllProducts } from '../store/productsSlice'
import { useNavigate } from "react-router-dom";



export const Products = () => {
     const productDetails=useSelector((state)=>state.products);//for accessing state
     
   console.log(productDetails.products)
   localStorage.setItem('products',JSON.stringify(productDetails.products))


   const dispatch = useDispatch();
   const navigate= useNavigate()


   const getproducts=()=>{
    dispatch(getAllProducts());
   }
   
   useEffect(()=>{
        getproducts()
   },[])
   const handleDelete=(product)=>{
    navigate(`delete/${product.id}`)
  }
  const handleEdit=(product)=>{
    navigate(`edit/${product.id}`)
  }
  return (
      <div className='container'>
          <table class="table table-dark table-striped">
            
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {productDetails.products.map((product,i)=>(
              <tr key={i}>
    
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>






                
                <td><button className='btn btn-warning' onClick={()=>{handleEdit(product)}}>Edit</button></td>
                <td><button className='btn btn-danger' onClick={()=>{handleDelete(product)}}>Delete</button></td>
             </tr>))}
            </tbody>
            </table>
      
        </div>
      )
    
      
    }
    