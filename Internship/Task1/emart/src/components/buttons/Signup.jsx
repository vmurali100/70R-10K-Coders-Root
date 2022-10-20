import React from 'react';
import {useNavigate} from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate()
 const handleSignup =() =>{
    navigate('/')
 }

  return (
    <div className='container w-50'>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInput" className="form-label">Username</label>
                  <input type="text" className="form-control" id="exampleInput"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">confirm Details</label>
                </div>
                <button type="submit" className="btn btn-primary w-100" onClick={handleSignup}>Submit</button>
              </form>
            </div>
          </div>       
  )
}

export default Signup