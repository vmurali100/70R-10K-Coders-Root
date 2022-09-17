import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Info = () => {
  const [comments, setcomments] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let url = "http://localhost:3000/comments/";
    axios.get(url).then((res) => {
      console.log(res.data);
      localStorage.setItem("Comments", JSON.stringify(res.data));
      setcomments(res.data);
    });
  }, []);

  const addComments = () => {
    navigate("/createcomments");
  };
  return (
    <div className="container">
      <button className="btn btn-primary" type="button" onClick={addComments}>
        Add Comments
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>postId</th>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>body</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comments, i) => (
            <tr key={i}>
              <td>{comments.postId}</td>
              <td>{comments.id}</td>
              <td>{comments.name}</td>
              <td>{comments.email}</td>
              <td>{comments.body}</td>

              {/* <td><button type="button" className="btn btn-primary">Details</button></td>  */}
              <td>
                <Link
                  to={`editcomments/${comments.postId}`}
                  className=" btn btn-warning"
                >
                  Edit
                </Link>
              </td>
              <td>
                <Link
                  to={`deletecomments/${comments.id}`}
                  className=" btn btn-danger"
                >
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
