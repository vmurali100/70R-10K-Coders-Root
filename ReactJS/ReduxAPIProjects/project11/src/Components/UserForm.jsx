import React from 'react'
import { Link } from "react-router-dom";


export const UserForm = ({btnText,handleEvent,handleChangeEvent,cart,handleCancel}) => {
  return (
    <div>
        <form>
            <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="id" className="form-control" name="id" value={cart.id}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="name" className="form-control"  name="name" value={cart.name}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
          <input type="username" className="form-control"  name="username" value={cart.username}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
           
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email </label>
                <input type="email" className="form-control"  name="email" value={cart.email}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password </label>
                <input type="password" className="form-control"  name="password" value={cart.password}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message </label>
                <input type="message" className="form-control"  name="message" value={cart.message}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="confirmpassword" className="form-label">Confirm password </label>
                <input type="confirmpassword" className="form-control"  name="confirmpassword" value={cart.confirmpassword}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            
            

            <button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>
            <Link  to="/"className='btn btn-primary' style={{marginLeft:'30px'}} onClick={handleCancel} >Cancel</Link>

        </form>
    </div>
  )
}
