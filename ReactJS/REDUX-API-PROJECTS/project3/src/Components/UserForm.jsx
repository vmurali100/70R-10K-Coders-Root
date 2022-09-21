import React from 'react'
import { Link } from 'react-router-dom'

export const UserForm = ({btnText, handleEvent, handleChangeEvent, detail}) => {
  return (
    <div>
        <form>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input type="id" className="form-control" name="id" value={detail.id} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">Fname</label>
                    <input type="fname" className="form-control" name="fname" value={detail.fname} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="lname" className="form-label">Lname</label>
                    <input type="lname" className="form-control" name="lname" value={detail.lname} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="tel" className="form-label">Tel</label>
                    <input type="tel" className="form-control" name="tel" value={detail.tel} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="address" className="form-control" name="address" value={detail.address} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="city" className="form-control" name="city" value={detail.city} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <input type="state" className="form-control" name="state" value={detail.state} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>

                <div className="mb-3">
                    <label htmlFor="zip" className="form-label">Zip</label>
                    <input type="zip" className="form-control" name="zip" value={detail.zip} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>

                <button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>
                <Link to="/" className="btn btn-primary" style={{marginLeft:"20px"}}>
                Cancel
                </Link>
            </form>
    </div>
  )
}
