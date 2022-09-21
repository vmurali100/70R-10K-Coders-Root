import React from "react";
import { Link } from "react-router-dom";

export const AllUsers = ({btnText,handleEvent,handleChangeEvent,user }) => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label className="form-label">Album Id</label>
          <input type="email" className="form-control" name='albumId' value={user.albumId} onChange={(e)=>{handleChangeEvent(e)}}/>
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
          <label className="form-label">Url</label>
          <input type="email" className="form-control" name='url' value={user.url} onChange={(e)=>{handleChangeEvent(e)}} />
        </div>
        <div className="mb-3">
          <label className="form-label">ThumbnailUrl</label>
          <input type="email" className="form-control" name='thumbnailUrl' value={user.thumbnailUrl} onChange={(e)=>{handleChangeEvent(e)}} />
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
