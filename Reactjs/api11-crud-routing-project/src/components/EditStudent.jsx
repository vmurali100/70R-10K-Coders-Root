import React,{useState,useEffect} from 'react'
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
export const EditStudent = () => {
    const urlObj = useParams()

    let url="http://localhost:3002/students/"
    const info =JSON.parse(localStorage.getItem("Students"))
    const result=info.find((std)=>std.id == urlObj.id)

    
    const [students, setstudents] = useState(result)
    const navigate = useNavigate()
    const handleChange = (e) => {
        let newStudents = { ...students };
        newStudents[e.target.name] = e.target.value;
        setstudents(newStudents)
    }
    const updateStudent=()=>{
        axios.put(url + urlObj.id,students).then(() => {
            navigate("/")
    })
 }
 const {id, title,price,quantity,total,discountPercentage,discountedPrice} = students
  return (
    <div className='container'>
        <form>
            <label htmlFor="">ID</label>
            <input type="text" name="id" value={id} onChange={(e) => {handleChange(e)}} /> <br />
            <label htmlFor="">Title</label>
            <input type="text" name="title" value={title} onChange={(e) => {handleChange(e)}} /> <br />
            <label htmlFor="">price</label>
            <input type="text" name="price" value={price} onChange={(e) => {handleChange(e)}} /> <br />
            <label htmlFor="">Quantity</label>
            <input type="text" name="quantity" value={quantity} onChange={(e) => {handleChange(e)}} /> <br />
            <label htmlFor="">Total</label>
            <input type="text" name="total" value={total} onChange={(e) => {handleChange(e)}} /> <br />
            <label htmlFor="">DiscountPercentage</label>
            <input type="text" name="discountPercentage" value={discountPercentage} onChange={(e) => {handleChange(e)}} /> <br />
            <label htmlFor="">DiscountedPrice</label>
            <input type="text" name="discountedPrice" value={discountedPrice} onChange={(e) => {handleChange(e)}} /> <br />
           
            <button type="button" onClick={updateStudent}>Update Student</button>
        </form>
    </div>
  )
  }
