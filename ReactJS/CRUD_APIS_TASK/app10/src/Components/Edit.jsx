import React,{useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios"

export const Edit = () => {
   const urlObj= useParams();
   let url="http://localhost:4011/products/"



  const info = JSON.parse(localStorage.getItem("Products"))
  const result = info.find((std)=> std.id == urlObj.id)
  console.log(urlObj)


  const [product, setproduct] = useState(result)
  const navigate= useNavigate()



  const UpdateProduct=()=>{
    axios.put(url+urlObj.id,product).then(()=>{
      navigate("/")
    })

  }
  const handleChange=(e)=>{
    let newProducts={...product}
   newProducts[e.target.name]=e.target.value
   setproduct(newProducts)

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
            
            
            

       <button type="button" className='btn btn-primary' onClick={UpdateProduct}>Add</button>


</form>
</div>
  )}
    
