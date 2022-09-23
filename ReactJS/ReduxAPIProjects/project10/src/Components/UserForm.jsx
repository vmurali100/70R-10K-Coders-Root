import React from 'react'
import { Link } from "react-router-dom";


export const UserForm = ({btnText,handleEvent,handleChangeEvent,product,handleCancel}) => {
  return (
    <div>
        <form>
            <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="id" className="form-control" name="id" value={product.id}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="title" className="form-control"  name="title" value={product.title}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
          <input type="price" className="form-control"  name="price" value={product.price}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
           
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description </label>
                <input type="description" className="form-control"  name="description" value={product.description}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category </label>
                <input type="category" className="form-control"  name="category" value={product.category}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            
            
            

            <button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>
            <Link  to="/"className='btn btn-primary' style={{marginLeft:'30px'}} onClick={handleCancel} >Cancel</Link>

        </form>
    </div>
  )
}
