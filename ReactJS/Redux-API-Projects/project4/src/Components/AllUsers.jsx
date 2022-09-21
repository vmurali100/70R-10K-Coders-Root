import React from "react";
import { Link } from "react-router-dom";

export const AllUsers = ({btnText,handleEvent,handleChangeEvent,user }) => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label className="form-label">User Id</label>
          <input type="email" className="form-control" name='userId' value={user.userId} onChange={(e)=>{handleChangeEvent(e)}}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Id</label>
          <input type="name" className="form-control" name='id' value={user.id} onChange={(e)=>{handleChangeEvent(e)}}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="username" className="form-control" name='title' value={user.title} onChange={(e)=>{handleChangeEvent(e)}} />
        </div>
        <div className="mb-3">
          <label className="form-label">Completed</label>
          <input type="email" className="form-control" name='completed' value={user.completed} onChange={(e)=>{handleChangeEvent(e)}} />
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
