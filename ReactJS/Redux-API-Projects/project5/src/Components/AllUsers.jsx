import React from "react";
import { Link } from "react-router-dom";

export const AllUsers = ({btnText,handleEvent,handleChangeEvent,user }) => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label className="form-label">Post Id</label>
          <input type="email" className="form-control" name='postId' value={user.postId} onChange={(e)=>{handleChangeEvent(e)}}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Id</label>
          <input type="name" className="form-control" name='id' value={user.id} onChange={(e)=>{handleChangeEvent(e)}}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="username" className="form-control" name='name' value={user.name} onChange={(e)=>{handleChangeEvent(e)}} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name='email' value={user.email} onChange={(e)=>{handleChangeEvent(e)}} />
        </div>
        <div className="mb-3">
          <label className="form-label">Body</label>
          <input type="email" className="form-control" name='body' value={user.body} onChange={(e)=>{handleChangeEvent(e)}} />
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
