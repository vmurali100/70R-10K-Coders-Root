/* eslint-disable eqeqeq */
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams,Link } from "react-router-dom";

export const Edit = () => {
  

  let url = "http://localhost:3004/albums/";
  const navigate = useNavigate();
  const UrlEdit = useParams()

  const date = JSON.parse(localStorage.getItem("Albums"))
  const response = date.find((album)=> album.id == UrlEdit.id)
  const [album, setalbum] = useState(response);

  const handleChange = (e) => {
    let newAlbum = { ...album };
    newAlbum[e.target.name] = e.target.value;
    setalbum(newAlbum);
  };
  const UpdateAlbum = () => {
    axios.put(url+UrlEdit.id,album).then(()=>{
        navigate("/")
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
        <button type="button" className="btn btn-primary" onClick={UpdateAlbum}>
          Update
        </button>
        <Link to="/" className="btn btn-primary" style={{ marginLeft: "20px" }}>
        Cancel
      </Link>
      </form>
    </div>
  );
};
