import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const AllInfo = () => {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    let url = "http://localhost:3006/todos/";
    axios.get(url).then((response) => {
      localStorage.setItem("Todos", JSON.stringify(response.data));
      settodos(response.data);
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
            <th>Completed</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todos, i) => (
            <tr key={i}>
              <td>{todos.userId}</td>
              <td>{todos.id}</td>
              <td>{todos.title}</td>
              <td>{todos.completed}</td>
              <td>
                <Link to={`edit/${todos.id}`} className=" btn btn-warning">
                  Edit
                </Link>
              </td>
              <td>
                <Link to={`delete/${todos.id}`} className=" btn btn-danger">
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
