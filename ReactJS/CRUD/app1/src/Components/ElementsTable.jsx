import React,{useState} from 'react'
import ElementsData from "./data.json"

export const ElementsTable = () => {
    const [elements, setelements] = useState(ElementsData)
    const deleteelement =(fname)=>{
      let newElements=elements.filter((element)=>element.fname !=fname);
      setelements(newElements)
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
      {products.map((element,i)=>{
        return <tr key={i}>
          <td >{element.fname}</td>
          <td >{element.lname}</td>
          <td >{element.dob}</td>
          <td >{element.email}</td>
          <td >{element.mobilenumber}</td>
          <td><button type="button" className='btn btn-warning'>Edit</button></td>
          <td><button type="button" className='btn btn-danger' onClick={()=>{deleteelement(element.fname)}}>Delete</button></td>

        </tr>
      })}
        </tbody>
        </table>
    </div>
  )
}