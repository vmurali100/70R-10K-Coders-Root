import React from 'react'
import { Link } from "react-router-dom";


export const UserForm = ({btnText,handleEvent,handleChangeEvent,college,handleCancel}) => {
  return (
    <div>
        <form>
            <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="id" className="form-control" name="id" value={college.id}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="university" className="form-label">University</label>
                <input type="university" className="form-control"  name="university" value={college.university}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            <div className="mb-3">
            <label htmlFor="institute" className="form-label">Institute</label>
          <input type="institute" className="form-control"  name="institute" value={college.institute}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="branch" className="form-label">Branch </label>
                <input type="branch" className="form-control"  name="branch" value={college.branch}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="degree" className="form-label">Degree </label>
                <input type="degree" className="form-control"  name="degree" value={college.degree}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="experience" className="form-label">Experience </label>
                <input type="experience" className="form-control"  name="experience" value={college.experience}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="yourwebsiteorblog" className="form-label">Yourwebsiteorblog </label>
                <input type="yourwebsiteorblog" className="form-control"  name="yourwebsiteorblog" value={college.yourwebsiteorblog}  onChange={(e)=>{handleChangeEvent(e)}}/>

            </div>
            

            <button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>
            <Link  to="/"className='btn btn-primary' style={{marginLeft:'30px'}} onClick={handleCancel} >Cancel</Link>

        </form>
    </div>
  )
}
