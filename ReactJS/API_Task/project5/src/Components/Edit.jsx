import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Edit = () => {
    const urlobj = useParams()

    let url = "http://localhost:3005/products/"

    const Info = JSON.parse(localStorage.getItem("users"))
    const result = Info.find((MM) => MM.id == urlobj.id)
    const [page, setpage] = useState(result)
    const navigate = useNavigate()

    const handleChange = (e) => {
        let newPage = { ...page }
        newPage[e.target.name] = e.target.value
        setpage(newPage)
    }
    const updatePage=()=>{
        axios.put(url+urlobj.id,page).then(()=>{
            navigate("/")
        })
    }
    return (
        <div>

            <form>
            <div className="mb-3">
                    <label for="id" className="form-label">ID</label>
                    <input type="id" name='id' value={page.id} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="title" className="form-label">Title</label>
                    <input type="title" name='title' value={page.title} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="price" className="form-label">Price</label>
                    <input type="price" name='price' value={page.price} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="description" className="form-label">description</label>
                    <input type="description" name='description' value={page.description} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="category" className="form-label">Category</label>
                    <input type="category" name='category' value={page.category} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <button type="submit" onClick={updatePage} className="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}
