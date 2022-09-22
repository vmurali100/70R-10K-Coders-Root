import React from 'react'
import { Link } from 'react-router-dom'

export const UserForm = ({btnText, handleEvent, handleChangeEvent, student}) => {
  return (
    <div>
        <form>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input type="id" className="form-control" name="id" value={student.id} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">fname</label>
                    <input type="fname" className="form-control" name="fname" value={student.fname} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="lname" className="form-label">lname</label>
                    <input type="lname" className="form-control" name="lname" value={student.lname} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>

                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="city" className="form-control" name="city" value={student.city} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>

                

                <button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>
                <Link to="/" className="btn btn-primary" style={{marginLeft:"20px"}}>
                Cancel
                </Link>
            </form>
    </div>
  )
}
