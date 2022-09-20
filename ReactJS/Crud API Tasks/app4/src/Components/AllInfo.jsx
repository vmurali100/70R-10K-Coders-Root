import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export const AllInfo = () => {
  const [album, setalbum] = useState([]);


  useEffect(() => {
    let url = "http://localhost:3004/albums/";
    axios.get(url).then((response) => {
      localStorage.setItem("Albums", JSON.stringify(response.data));
      setalbum(response.data);
    });
  }, []);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {album.map((album, i) => (
            <tr key={i}>
              <td>{album.userId}</td>
              <td>{album.id}</td>
              <td>{album.title}</td>
              {/* <td><button type="button" className="btn btn-primary">Details</button></td>  */}
              <td>
                <Link to={`edit/${album.id}`} className=" btn btn-warning">
                  Edit
                </Link>
              </td>
              <td>
                <Link to={`delete/${album.id}`} className=" btn btn-danger">
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
