import React from 'react'
import { Link } from 'react-router-dom'

export const Userform = ({ btnText, handleevent, handlechangeevent, win }) => {
    return (
        <div className="container">
            <form>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input type="text" className="form-control" name='id' value={win.id} onChange={(e) => { handlechangeevent(e) }} />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">FNAME</label>
                    <input type="text" className="form-control" name='fname' value={win.fname} onChange={(e) => { handlechangeevent(e) }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">LNAME</label>
                    <input type="text" className="form-control" name='lname' value={win.lname} onChange={(e) => { handlechangeevent(e) }} />
                </div>



                <button type="button" className="btn btn-primary" onClick={handleevent} >{btnText}</button>
                <Link to="/" className="btn btn-primary" style={{ marginLeft: "20px" }}>CANCEL</Link>
            </form>
        </div>
    )
}
