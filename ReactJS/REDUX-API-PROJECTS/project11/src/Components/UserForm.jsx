import React from 'react'
import { Link } from 'react-router-dom'

export const UserForm = ({btnText, handleEvent, handleChangeEvent, note}) => {
  return (
    <div>
        <form>
                
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input type="id" className="form-control" name="id" value={note.id} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="street" className="form-label">street</label>
                    <input type="street" className="form-control" name="street" value={note.street} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">city</label>
                    <input type="city" className="form-control" name="city" value={note.city} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="state" className="form-label">state</label>
                    <input type="state" className="form-control" name="state" value={note.state} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="zipcode" className="form-label">zipcode</label>
                    <input type="zipcode" className="form-control" name="zipcode" value={note.zipcode} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">country</label>
                    <input type="country" className="form-control" name="country" value={note.country} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>



                <button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>
                <Link to="/" className="btn btn-primary" style={{marginLeft:"20px"}}>
                Cancel
                </Link>
            </form>
    </div>
  )
}
