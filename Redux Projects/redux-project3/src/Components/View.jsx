import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
export const View = () => {
  const [user, setuser] = useState({
    albumId: "",
    id: "",
    title: "",
    url: "",
    thumbnailUrl: ""
      
  });
  const { id } = useParams();
  useEffect(() => {
    getDataFromServer();
  }, []);

  const getDataFromServer = () => {
    axios.get(`http://localhost:4002/user/${id}`).then((response) => {
      console.log(response);
      setuser(response.data);
    });
  };
  return (
    <div className="container py-4">
      <center>
        <h1 className="display-5">User Id:{id}</h1>
        <hr />
        <ul className="list-group w-100">
          <li className="list-group-item">Album Id:{user.albumId}</li>
          <li className="list-group-item">Title:{user.title}</li>
          <li className="list-group-item">Url:{user.url}</li>
          <li className="list-group-item">Thumbnail Url:<img  src={user.thumbnailUrl}/></li>
          {/* <li className="list-group-item">Thumbnail Url:{user.thumbnailUrl}</li> */}
          </ul>
      </center>
      <hr />
      <li className="btn btn-info">
        <Link to="/Home">Back To Home</Link>
      </li>
    </div>
  );
};
export default View;
