import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Create = () => {
  const [album, setalbum] = useState({
    userId: "",
    id: "",
    title: "",
  });
  let url = "http://localhost:3004/albums/";
  const navigate = useNavigate();

  const handleChange = (e) => {
    let newAlbum = { ...album };
    newAlbum[e.target.name] = e.target.value;
    setalbum(newAlbum);
  };

  const AddAlbum = () => {
    axios.post(url, album).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label className="form-label">User Id</label>
          <input
            type="text"
            className="form-control"
            name="userId"
            value={album.userId}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Id</label>
          <input
            type="text"
            className="form-control"
            name="id"
            value={album.id}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={album.title}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={AddAlbum}>
          Add
        </button>
        <div className="mb-3">
          <Link to="/" className="btn btn-primary" style={{marginTop:"20px"}}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};
