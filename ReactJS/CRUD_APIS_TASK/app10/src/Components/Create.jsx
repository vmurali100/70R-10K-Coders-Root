import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios"
export const Create = () => {

    const [product, setproduct] = useState({"id":"" ,
    "title": "",
    "price": "",
    "description": "",
    "category": ""
   })
    const navigate= useNavigate()
    let url="http://localhost:4011/products/"



    const handleChange=(e)=>{
        let newProducts={...product}
        newProducts[e.target.name]=e.target.value
        setproduct(newProducts)
    }
    const AddProduct=()=>{
        axios.post(url,product).then(()=>{
            navigate('/')
        })

    }
    return (
        <div className='container'>
        <form>
        <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="id" className="form-control" name="id" value={product.id}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="title" className="form-control"  name="title" value={product.title}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
          <input type="price" className="form-control"  name="price" value={product.price}  onChange={(e)=>{handleChange(e)}}/>

            </div>
           
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description </label>
                <input type="description" className="form-control"  name="description" value={product.description}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category </label>
                <input type="category" className="form-control"  name="category" value={product.category}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            
            
            
           
    
           <button type="button" className='btn btn-primary' onClick={AddProduct}>Add</button>
    
    
    </form>
    </div>
      )}
    