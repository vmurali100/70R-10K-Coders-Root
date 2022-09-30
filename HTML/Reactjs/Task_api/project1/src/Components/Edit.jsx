import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Edit = () => {
    const urlobj = useParams()

    let url = "/"

    const Info = JSON.parse(localStorage.getItem("users"))
    const result = Info.find((PS) => PS.id == urlobj.id)
    const [kart, setkart] = useState(result)
    const navigate = useNavigate()

    const handleChange = (e) => {
        let newkart = { ...kart }
        newkart[e.target.name] = e.target.value
        setkart(newkart)
    }
    const updatekart=()=>{
        axios.put(url+urlobj.id,kart).then(()=>{
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
                <button type="submit" onClick={updatekart} className="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}