import { React, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export const Create = () => {
    const [carts, setcarts] = useState({
        id: "",
        userId: "",
        date: "",
        products: {
            productId: "",
            quantity: ""
        }

    });

    let url = "http://localhost:3208/FakeCarts"

    const navigate = useNavigate()

    const handleChange = e => {
        let newcarts = { ...carts };
        newcarts[e.target.name] = e.target.value;
        setcarts(newcarts)
    }

    const addItem = () => {
        axios.post(url, carts).then(() => {
            console.log("Data added successfully")
            navigate('/')
        })

    }
    return (
        <div>
            <form>

                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID : </label>
                    <input type="text" className="form-control" name="id" value={carts.id} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">User ID : </label>
                    <input type="text" className="form-control" name="userId" value={carts.userId} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date : </label>
                    <input type="text" className="form-control" name="date" value={carts.date} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="productId" className="form-label">Product ID: </label>
                    <input type="text" className="form-control" name="products.productId" value={carts.products.productId} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">Quantity: </label>
                    <input type="text" className="form-control" name="products.quantity" value={carts.products.quantity} onChange={(e) => { handleChange(e) }} />
                </div>


                <button type="button" className='btn btn-primary' onClick={addItem} >Add Item</button>

            </form>
        </div>
    )
}