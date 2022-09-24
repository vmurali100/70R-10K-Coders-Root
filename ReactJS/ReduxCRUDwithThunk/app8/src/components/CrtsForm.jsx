import React from 'react'
import {Link} from 'react-router-dom';

export const CrtsForm = ({crt, handleEvent, handlechangeEvent, btnTxt }) => {
  return (
    <div className='container'>
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">ID:</label>
    <input type="text" className="form-control"
     id="id" name="id" value={crt.id} onChange={(e)=>{handlechangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">UserId:</label>
    <input type="text" className="form-control"
     id="userId" name="userId" value={crt.userId} onChange={(e)=>{handlechangeEvent(e)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Date:</label>
    <input type="text" className="form-control"
     id="date" name="date" value={crt.date} onChange={(e)=>{handlechangeEvent(e)}}/>
  </div>
  <Link to={`/`}> <button type='button' className='btn btn-primary' onClick={handleEvent}>{btnTxt}</button></Link>
  <Link to={`/`}> <button type='button' className='btn btn-primary'>Cancel</button></Link>
</form>
    </div>
  )
}
