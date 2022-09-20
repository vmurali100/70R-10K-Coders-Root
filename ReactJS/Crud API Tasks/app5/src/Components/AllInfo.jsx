import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const AllInfo = () => {
  const [photos, setphotos] = useState([]);

  useEffect(() => {
    let url = "http://localhost:3005/photos/";
    axios.get(url).then((response) => {
      localStorage.setItem("Photos", JSON.stringify(response.data));
      setphotos(response.data);
    });
  }, []);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Album Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Url</th>
            <th>ThumbnailUrl</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {photos.map((photos, i) => (
            <tr key={i}>
              <td>{photos.albumId}</td>
              <td>{photos.id}</td>
              <td>{photos.title}</td>
              <td>{photos.url}</td>
              <td>{photos.thumbnailUrl}</td>
              {/* <td><button type="button" className="btn btn-primary">Details</button></td>  */}
              <td>
                <Link to={`edit/${photos.id}`} className=" btn btn-warning">
                  Edit
                </Link>
              </td>
              <td>
                <Link to={`delete/${photos.id}`} className=" btn btn-danger">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
