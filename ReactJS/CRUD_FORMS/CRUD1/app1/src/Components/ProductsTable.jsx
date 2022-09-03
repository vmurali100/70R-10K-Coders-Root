import React,{useState} from 'react'
import ProductsData from "./data.json"

export const ProductsTable = () => {
    const [products, setproducts] = useState(ProductsData)
    const deleteproduct =(fname)=>{
      let newProducts=products.filter((product)=>product.fname !=fname);
      setproducts(newProducts)
    }
  return (
    <div className="container">
      <table className="table table-success table-striped-columns">
        <thead>
          <tr>
            <th >First Name</th>
            <th >Last name</th>
            <th > Date of Birth</th>
            <th>Mobile Number</th>
            <th >Email</th>
            <th> Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
      {products.map((product,i)=>{
        return <tr key={i}>
          <td >{product.fname}</td>
          <td >{product.lname}</td>
          <td >{product.dob}</td>
          <td >{product.email}</td>
          <td >{product.mobilenumber}</td>
          <td><button type="button" className='btn btn-warning'>Edit</button></td>
          <td><button type="button" className='btn btn-danger' onClick={()=>{deleteproduct(product.fname)}}>Delete</button></td>

        </tr>
      })}
        </tbody>
        </table>
    </div>
  )
}
