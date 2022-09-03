import React,{useState} from 'react'

export const CreateProduct = () => {
    const [product, setproduct] = useState(
        {"fName":"","lName":"","dob":"","email":"","mobileNumber":""})
        const [products, setproducts] = useState([])
        const [index, setindex] = useState(0)

        const handleChange=(e)=>{
            let newProduct ={...product};//creating copy of an object
            newProduct[e.target.name]= e.target.value;//name:will know what we are typing ex:fname,email,productname,password
            setproduct(newProduct)
        };
        const handleSubmit=()=>{
            console.log(product)
            let newProducts=[...products]
            newProducts.push(product)
            setproducts(newProducts)//use todisplay the data one by one.
            ClearForm()
        };
        const ClearForm=()=>{
            setproduct( {"fName":"","lName":"","dob":"","email":"","mobileNumber":""})

        }
        const deleteproduct=(fName)=>{
            let newProducts=products.filter((myProduct)=>myProduct.fName !=fName);
        setproducts(newProducts)
        }
        const handleEdit=(myProduct,i)=>{
            setproduct(myProduct);
            setindex(i)//i is saved in indexvalue
    
        }
    
        const handleUpdate=()=>{
            let newProducts =[...products];
            newProducts[index]=product;//index:what ever row we are clicking it will save in another button.
            setproducts(newProducts)
            ClearForm()
        }
        const{fName,lName,dob,email,mobileNumber}=product;

  return (
         <div>
                  <h2>HTML FORM</h2>

          <form> 
            <label htmlFor="">First Name:</label> 
            <input type="text" name="fName" value={fName} onChange={(e)=>{handleChange(e)}}/><br/>
            <label htmlFor="">Last Name:</label> 
            <input type="text" name="lName" value={lName} onChange={(e)=>{handleChange(e)}}/><br/>
            <label htmlFor="">Date of Birth:</label> 
            <input type="text" name="dob" value={dob} onChange={(e)=>{handleChange(e)}} /><br/>
            <label htmlFor="">Email :</label> 
            <input type="text" name="email" value={email} onChange={(e)=>{handleChange(e)}}/><br/>
            <label htmlFor="">Mobile Number:</label> 
            <input type="text" name="mobileNumber" value={mobileNumber} onChange={(e)=>{handleChange(e)}}/><br/>
            <button onClick={handleSubmit} type="button">SUBMIT</button>
            <button onClick={handleUpdate} type="button">Update</button>
          </form>
          <div className="container">
      <table className="table table-success table-striped-columns">
        <thead>
          <tr>
            <th >First Name</th>
            <th >Last Name</th>
            <th > Date of Birth</th>
            <th >Email</th>
            <th>Mobile Number</th>
            <th> Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
      {products.map((product,i)=>{
        return <tr key={i}>
          <td >{product.fName}</td>
          <td >{product.lName}</td>
          <td >{product.dob}</td>
          <td >{product.email}</td>
          <td >{product.mobileNumber}</td>
          <td><button type="button" className='btn btn-warning' onClick={()=>{handleEdit(product,i)}}>Edit</button></td>
          <td><button type="button" className='btn btn-danger' onClick={()=>{deleteproduct(product.fName)}}>Delete</button></td>

        </tr>
      })}
        </tbody>
        </table>
    </div>
          </div>
  )
}
