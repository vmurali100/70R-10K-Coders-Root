import React from "react";
import { Link } from "react-router-dom";

export const AllUsers = ({btnText,handleEvent,handleChangeEvent,user }) => {
  
  // const { id, name, username, email,street,suite, city,zipcode,phone,website,address} = user;
  return (
    <div>
      <form>
        <div className="mb-3">
          <label className="form-label">Id</label>
          <input type="email" className="form-control" name='id' value={user.id} onChange={(e)=>{handleChangeEvent(e)}}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="name" className="form-control" name='name' value={user.name} onChange={(e)=>{handleChangeEvent(e)}}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="username" className="form-control" name='username' value={user.username} onChange={(e)=>{handleChangeEvent(e)}} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name='email' value={user.email} onChange={(e)=>{handleChangeEvent(e)}} />
        </div>
        <div className="mb-3">
          <label className="form-label">Street</label>
          <input type="email" className="form-control" name='street' value={user.address.street} onChange={(e)=>{handleChangeEvent(e)}} />
        </div>
        <div className="mb-3">
          <label className="form-label">Suite</label>
          <input type="email" className="form-control" name='suite' value={user.address.suite} onChange={(e)=>{handleChangeEvent(e)}} />
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input type="email" className="form-control" name='city' value={user.address.city} onChange={(e)=>{handleChangeEvent(e)}} />
        </div>
        <div className="mb-3">
          <label className="form-label">Zipcode</label>
          <input type="email" className="form-control" name='zipcode' value={user.address.zipcode} onChange={(e)=>{handleChangeEvent(e)}} />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="email" className="form-control" name='phone' value={user.phone} onChange={(e)=>{handleChangeEvent(e)}} />
        </div>
        <div className="mb-3">
          <label className="form-label">Website</label>
          <input type="email" className="form-control" name='website' value={user.website} onChange={(e)=>{handleChangeEvent(e)}} />
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
