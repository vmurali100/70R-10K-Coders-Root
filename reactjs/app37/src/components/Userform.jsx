import React from 'react'
import { Link } from 'react-router-dom'

export const Userform = ({btnText,handleevent,handlechangeevent,win}) => {
  return (
    <div className="container">
    <form>
        <div className="mb-3">
            <label htmlFor="id" className="form-label"   >userid</label>
            <input type="text" className="form-control" name='userid' value={win.userid} onChange={(e)=>{handlechangeevent(e)}}/>

        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">id</label>
            <input type="text" className="form-control" name='id' value={win.id} onChange={(e)=>{handlechangeevent(e)}}/>
        </div>

        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">title</label>
            <input type="text" className="form-control" name='title' value={win.title} onChange={(e)=>{handlechangeevent(e)}}/>
        </div>

        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">completed</label>
            <input type="text" className="form-control" name='completed' value={win.completed} onChange={(e)=>{handlechangeevent(e)}}/>
        </div>

        <button type="button" className="btn btn-primary" onClick={handleevent} >{btnText}</button>
        <Link to="/" className="btn btn-primary" style={{marginLeft:"20px"}}>CANCEL</Link>
    </form>
</div>
  )
}
