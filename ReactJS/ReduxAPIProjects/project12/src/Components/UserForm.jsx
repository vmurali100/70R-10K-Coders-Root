import React from 'react'
import { Link } from "react-router-dom";


export const UserForm = ({btnText,handleEvent,handleChangeEvent,calender,handleCancel}) => {
  return (
    <div>
        <form>
            <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="id" className="form-control" name="id" value={calender.id}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            
            <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
          <input type="username" className="form-control"  name="username" value={calender.username}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
           
            
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password </label>
                <input type="password" className="form-control"  name="password" value={calender.password}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="emailaddress" className="form-label">EmailAddress </label>
                <input type="emailaddress" className="form-control"  name="emailaddress" value={calender.emailaddress}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="dateofbirth" className="form-label">Dateofbirth </label>
                <input type="dateofbirth" className="form-control"  name="dateofbirth" value={calender.dateofbirth}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="height" className="form-label">Height </label>
                <input type="height" className="form-control"  name="height" value={calender.height}  onChange={(e)=>{handleChangeEvent(e)}}/>
            </div>
            <div className="mb-3">
                <label htmlFor="weight" className="form-label">Weight </label>
                <input type="weight" className="form-control"  name="weight" value={calender.weight}  onChange={(e)=>{handleChangeEvent(e)}}/>
            </div>
            
            
            

            <button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>
            <Link  to="/"className='btn btn-primary' style={{marginLeft:'30px'}} onClick={handleCancel} >Cancel</Link>

        </form>
    </div>
  )
}
