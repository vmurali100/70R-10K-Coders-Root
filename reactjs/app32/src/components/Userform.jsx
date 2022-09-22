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
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" className="form-control" name='email' value={user.email} onChange={(e) => { handlechangeevent(e) }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">USERNAME</label>
                    <input type="text" className="form-control" name='username' value={user.username} onChange={(e) => { handlechangeevent(e) }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={user.password} onChange={(e) => { handlechangeevent(e) }} />
                </div>

                <button type="button " className="btn btn-primary" onClick={handleevent}>{btnText}</button>


                <Link to="/" className="btn btn-primary" style={{ marginLeft: "30px" }}>cancel</Link>
            </form>
        </div>
    )
}
