import React from "react";
import { Link } from "react-router-dom";

export const AllUsers = ({btnText,handleEvent,handleChangeEvent,user }) => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label className="form-label">Id</label>
          <input type="email" className="form-control" name='id' value={user.id} onChange={(e)=>{handleChangeEvent(e)}}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name='email' value={user.email} onChange={(e)=>{handleChangeEvent(e)}} />
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="username" className="form-control" name='username' value={user.username} onChange={(e)=>{handleChangeEvent(e)}} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="name" className="form-control" name='password' value={user.password} onChange={(e)=>{handleChangeEvent(e)}}/>
        </div>
        <div className="mb-3">
          <label className="form-label">StreetAddress</label>
          <input type="email" className="form-control" name='streetAddress' value={user.streetAddress} onChange={(e)=>{handleChangeEvent(e)}} />
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input type="email" className="form-control" name='city' value={user.city} onChange={(e)=>{handleChangeEvent(e)}} />
        </div>
        <div className="mb-3">
          <label className="form-label">State</label>
          <input type="email" className="form-control" name='state' value={user.state} onChange={(e)=>{handleChangeEvent(e)}} />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Zip</label>
          <input type="email" className="form-control" name='zip' value={user.zip} onChange={(e)=>{handleChangeEvent(e)}} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleEvent}>
          {btnText}
        </button>
        <Link to="/" className="btn btn-primary" style={{marginLeft:"10px"}}>
        Cancel
        </Link>
      </form>
    </div>
  );
};
