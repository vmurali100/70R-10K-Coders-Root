import React from 'react'
import { Link } from 'react-router-dom'

export const UserForm = ({btnText, handleEvent, handleChangeEvent, Input}) => {
  return (
    <div>
        <form>
        <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input type="id" className="form-control" name="id" value={Input.id} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">fname</label>
                    <input type="fname" className="form-control" name="fname" value={Input.fname} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="lname" className="form-label">lname</label>
                    <input type="lname" className="form-control" name="lname" value={Input.lname} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>

                <div className="mb-3">
                    <label htmlFor="dofb" className="form-label">DofB</label>
                    <input type="dofb" className="form-control" name="dofb" value={Input.dofb} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="emailid" className="form-label">Emailid</label>
                    <input type="emailid" className="form-control" name="emailid" value={Input.emailid} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="mobilenumber" className="form-label">Mobilenumber</label>
                    <input type="mobilenumber" className="form-control" name="mobilenumber" value={Input.mobilenumber} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>
                <Link to="/" className="btn btn-primary" style={{marginLeft:"20px"}}>
                Cancel
                </Link>
            </form>
    </div>
  )
}
