import React from 'react'
import { Link } from 'react-router-dom'

export const Userform = ({ btnText, handleevent, handlechangeevent, user }) => {
  return (
    <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">ID</label>
                    <input type="text" className="form-control" name='id' value={user.id} onChange={(e) => { handlechangeevent(e) }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">FNAME</label>
                    <input type="text" className="form-control" name='fname' value={user.fname} onChange={(e) => { handlechangeevent(e) }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">LNAME</label>
                    <input type="text" className="form-control" name='lname' value={user.lname} onChange={(e) => { handlechangeevent(e) }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">TEL</label>
                    <input type="text" className="form-control" name='tel' value={user.tel} onChange={(e) => { handlechangeevent(e) }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">ADDRESS</label>
                    <input type="text" className="form-control" name='address' value={user.address} onChange={(e) => { handlechangeevent(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">CITY</label>
                    <input type="text" className="form-control" name='city' value={user.city} onChange={(e) => { handlechangeevent(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">STATE</label>
                    <input type="text" className="form-control" name='state' value={user.state} onChange={(e) => { handlechangeevent(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">ZIP</label>
                    <input type="text" className="form-control" name='zip' value={user.zip} onChange={(e) => { handlechangeevent(e) }} />
                </div>
                <button type="button " className="btn btn-primary" onClick={handleevent}>{btnText}</button>


                <Link to="/" className="btn btn-primary" style={{ marginLeft: "30px" }}>cancel</Link>
            </form>
        </div>
  )
}
