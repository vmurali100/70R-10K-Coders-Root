import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
export const CreateStudent = () => {
    const [student, setstudent] = useState({
        "id": "",
          "title": "",
          "price": "",
          "quantity": "",
          "total": "",
          "discountPercentage": "",
          "discountedPrice": ""
   
    })
    const navigate = useNavigate()
    const [students, setstudents] = useState([])

    const handleChange = (e) => {
        let newStudent = { ...student };
        newStudent[e.target.name] = e.target.value;
        setstudent(newStudent)
    }
    const submitStudent = () => {
        axios.post("http://localhost:3002/students/", student).then(() => {
            navigate("/")
        })
    }
    const { id, title,price,quantity,total,discountPercentage,discountedPrice} = student
    return (
        <div className='container'>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Id</label>
                    <input type="text" className="form-control" name="id"  value={id} onChange={(e) => { handleChange(e) }} />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">title</label>
                    <input type="text" className="form-control" name="title"  value={title} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">price</label>
                    <input type="text" className="form-control" name="price"  value={price} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">quantity</label>
                    <input type="text" className="form-control" name="quantity"  value={quantity} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">total</label>
                    <input type="text" className="form-control" name="total"  value={total} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">discountPercentage</label>
                    <input type="text" className="form-control" name="discountPercentage"  value={discountPercentage} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">discountedPrice</label>
                    <input type="text" className="form-control" name="discountedPrice"  value={discountedPrice} onChange={(e) => { handleChange(e) }} />
                </div>
                
                <button type="button" className="btn btn-primary" onClick={submitStudent}>Submit</button>
            </form>
           
        </div>
    )
}
