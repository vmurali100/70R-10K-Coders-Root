import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Create = () => {

    const [kart, setkart] = useState({
        id: "",
        title: "",
        price: "",
        description: "",
        category:""
    })
    let url = "/"

    const navigate = useNavigate()

    const handleChange = (e) => {
        let newkart = { ...kart }
        newkart[e.target.name] = e.target.value
        setkart(newkart)
    }
    const addKart = () =>{
        axios.post(url,kart).then(()=>{
            navigate('/')
        })
    }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label for="id" className="form-label">ID</label>
                    <input type="id" name='id' value={kart.id} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="title" className="form-label">title</label>
                    <input type="title" name='title' value={kart.title} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="price" className="form-label">price</label>
                    <input type="price" name='price' value={kart.price} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="description" className="form-label">description</label>
                    <input type="description" name='description' value={kart.description} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="category" className="form-label">category</label>
                    <input type="category" name='category' value={kart.category} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <button type="submit" onClick={addKart} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}