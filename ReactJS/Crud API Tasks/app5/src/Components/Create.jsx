import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Create = () => {
  const [photos, setphotos] = useState({
    albumId: "",
    id: "",
    title: "",
    url: "",
    thumbnailUrl: "",
  });
  let url = "http://localhost:3005/photos/";
  const navigate = useNavigate();

  const handleChange = (e) => {
    let newphotos = { ...photos };
    newphotos[e.target.name] = e.target.value;
    setphotos(newphotos);
  };

  const AddPhotos = () => {
    axios.post(url, photos).then(() => {
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
        <button type="button" className="btn btn-primary" onClick={AddPhotos}>
          Add
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
