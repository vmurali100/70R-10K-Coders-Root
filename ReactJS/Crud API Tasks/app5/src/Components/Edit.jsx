/* eslint-disable eqeqeq */
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export const Edit = () => {
  let urll = "http://localhost:3005/photos/";
  const navigate = useNavigate();
  const UrlEdit = useParams();

  const data = JSON.parse(localStorage.getItem("Photos"));
  const response = data.find((photos) => photos.id == UrlEdit.id);
  const [photos, setphotos] = useState(response);

  const handleChange = (e) => {
    let newphotos = { ...photos };
    newphotos[e.target.name] = e.target.value;
    setphotos(newphotos);
  };

  const updatePhotos = () => {
    axios.put(urll + UrlEdit.id, photos).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label className="form-label">Album Id</label>
          <input
            type="text"
            className="form-control"
            name="albumId"
            value={photos.albumId}
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
            value={photos.id}
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
            value={photos.title}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Url</label>
          <input
            type="text"
            className="form-control"
            name="url"
            value={photos.url}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">ThumbnailUrl</label>
          <input
            type="text"
            className="form-control"
            name="thumbnailUrl"
            value={photos.thumbnailUrl}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={updatePhotos}
        >
          Update
        </button>
        <div className="mb-3">
          <Link
            to="/"
            className="btn btn-primary"
            style={{ marginTop: "20px" }}
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};
